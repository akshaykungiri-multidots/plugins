<?php
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MD_Prime
 * @subpackage MD_Prime/public
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Prime\Inc;

use MD_Prime\Inc\Traits\Singleton;

/**
 * Frontend main class.
 */
class Front {


	use Singleton;

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'MD_PRIME_VERSION' ) ) {
			$this->version = MD_PRIME_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->setup_front_hooks();
	}

	/**
	 * All public facing hook will be placed under this function.
	 */
	public function setup_front_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		add_action('init', array($this, 'md_cf7_add_shortcode'));
		add_filter('wpcf7_before_send_mail',  array($this, 'md_cf7_create_entry_cf'), 99);
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-prime-front', MD_PRIME_URL . 'assets/build/main.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-prime', MD_PRIME_URL . 'assets/build/main.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-prime',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);
	}

	/**
     * Function add cf7 to subscriber.
     *
     * @since 1.0.0
     */
    public function md_cf7_create_entry_cf($contact_form)
    {   

        $submission = \WPCF7_Submission::get_instance(); 
        $posted_data = $submission->get_posted_data();
        if (isset($posted_data['cf7_custom_md_mailchimp_list']) && !empty($posted_data['cf7_custom_md_mailchimp_list'])) {
            
            $list_id = sanitize_text_field($posted_data['cf7_custom_md_mailchimp_list']);
            $email_address = sanitize_email($posted_data['your-email']);
            $client = new \MailchimpMarketing\ApiClient();
            $client->setConfig(
                [
                'apiKey' => '449cd9a99b484a04fe9fb3ee2bb40a71-us13',
                'server' => 'us13',
                ]
            );
            try {
                //code...
                $client->lists->setListMember(
                    $list_id, md5(strtolower($email_address)), wp_json_encode(
                        [
                        "email_address" => $email_address,
                        "status_if_new" => "subscribed",
                        ]
                    )
                );
            } catch (\Throwable $th) {
                return true;
            }
        }
        return true;
    }

	/**
     * Function for shortcode callback to display mailing list in dropdown.
     *
     * @since 1.0.0
     */
    public function md_cf7_mailchimp_display_mail_list_callback()
    {
        $client = new \MailchimpMarketing\ApiClient();
        $client->setConfig(
            [
            'apiKey' => '449cd9a99b484a04fe9fb3ee2bb40a71-us13',
            'server' => 'us13',
            ]
        );

        $response = $client->lists->getAllLists();
        $mailing_lists = array();
        if (isset($response->lists) && !empty($response->lists)) {
            foreach ($response->lists as $value) {
                $list_id = $value->id;
                $list_name = $value->name;
                $mailing_lists[$list_id] = $list_name;
            }
        }
        ob_start();
        ?>
        <select name="cf7_custom_md_mailchimp_list">
        <?php foreach ($mailing_lists as $list_id => $list_name) { ?>
                <option value="<?php echo esc_attr($list_id); ?>"><?php echo esc_html($list_name); ?></option>
        <?php } ?>
        </select>
        <?php
        return ob_get_clean();
    }

	/**
     * Register the Shortcodes for the public-facing side of the site.
     *
     * @since 1.0.0
     */
    public function md_cf7_add_shortcode()
    {
        wpcf7_add_form_tag('md_cf7_mailchimp_display_mail_list', array($this, 'md_cf7_mailchimp_display_mail_list_callback'));
    }
}

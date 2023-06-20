<?php

class MDPluginTest extends WP_UnitTestCase
{

    public function test_custom_post_type_registered()
    {
        $this->assertTrue(post_type_exists('md_custom_books'));
    }

    public function test_custom_taxonomy_registered()
    {
        $this->assertTrue(taxonomy_exists('md_author'));
    }

    public function test_custom_shortcode()
    {
        $expected = 'This is Unit Testing.';
        $actual = do_shortcode('[md_custom_shortcode]');
        $this->assertEquals($expected, $actual);
    }

    public function test_custom_sidebar_registered()
    {
        $this->assertTrue(is_registered_sidebar('md_sidebar'));
    }

    public function test_custom_rest_api_route()
    {
        $request = new WP_REST_Request('GET', '/md/v1/data');
        $response = rest_get_server()->dispatch($request);
        $data = $response->get_data();
        $this->assertEquals('Welcome To Multidots.', $data['message']);
    }
}

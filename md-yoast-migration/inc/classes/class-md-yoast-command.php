<?php

/**
 * Dynamic Blocks.
 *
 * @package md-sync-product-multisite
 */

namespace MD_Yoast_Migration\Inc;

use MD_Yoast_Migration\Inc\Traits\Singleton;
use WP_CLI;

class Md_Yoast_Command
{

    use Singleton;

    /**
     * Function to sync yoast data in multisite
     * 
     * @param  $args array
     * @param  $assoc_args array
     * 
     * @return null
     */
    public function __invoke($args, $assoc_args)
    {
        if (!isset($assoc_args['csv-file'])) {
            WP_CLI::error("csv file is missing in command");
            return;
        }
        $csv_file = $assoc_args['csv-file'];

        // Read CSV file and process data
        $csv = array_map( function( $line ) {
            return str_getcsv( $line, ';' );
        }, file( $csv_file ) );

        // Skip the first row (header)
        array_shift( $csv );

        foreach ($csv as $row) {
            $title = $row[0];
            $slug = $row[2];
            $meta_desc = $row[3];
            $meta_title = $row[4];
            $focus_keyword = $row[5];
            $status = $row[6]; // Assuming status column is present

            // Check if the page already exists
            $existing_page = get_page_by_title( $title, OBJECT, 'page' );

            if ( $existing_page ) {
                // Page already exists, update its content
                $page_id = $existing_page->ID;
                $updated_page = array(
                    'ID'           => $page_id,
                    'post_content' => '', // You can update other fields if needed
                    'post_status'  => $status,
                );
                wp_update_post( $updated_page );
                WP_CLI::success( "Page '$title' updated." );
            } else {
                // Create page
                $page_id = wp_insert_post( array(
                    'post_title'    => $title,
                    'post_type'     => 'page',
                    'post_status'   => $status, // Use the provided status
                    'post_name'     => $slug, // Use provided slug
                ) );
                WP_CLI::success( "Page '$title' created." );
            }

            // Migrate Yoast SEO data
            update_post_meta( $page_id, '_yoast_wpseo_title', $meta_title );
            update_post_meta( $page_id, '_yoast_wpseo_metadesc', $meta_desc );
            update_post_meta( $page_id, '_yoast_wpseo_focuskw', $focus_keyword );

            WP_CLI::success( "Page '$title' created and Yoast SEO data migrated." );
        }
    }
}

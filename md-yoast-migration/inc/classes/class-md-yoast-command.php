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

        $batch_size = 20; // Number of posts to process per batch
        $counter = 0; // Initialize counter
        $total_posts = count( $csv ); // Total number of posts

        // Create progress bar
        $progress = WP_CLI\Utils\make_progress_bar( 'Processing Posts', $total_posts );

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

            $counter++;
            // Advance progress bar
            $progress->tick();

            // Clear memory every batch
            if ( $counter % $batch_size === 0 ) {
                WP_CLI::log( "Clearing memory..." );
                $this->clear_memory();
            }
        }

        // Finish progress bar
        $progress->finish();

        WP_CLI::success( "All Posts are created and Yoast SEO data migrated." );
    }

    /**
     * Clear memory by unsetting variables and running garbage collection.
     */
    private function clear_memory() {
        // Unset variables
        foreach ( array_keys( get_defined_vars() ) as $var ) {
            unset( $GLOBALS[ $var ] );
        }

        // Run garbage collection
        gc_collect_cycles();
    }
}

<?php
/**
 * Plugin Name: Shared Web Components
 * Description: Register script dependencies for rendering API-driven frontend widgets.
 */

namespace GS\Shared_Web_Components;

/**
 * Connect namespace functions to hooks.
 */
function bootstrap(): void {
    add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\register_modules' );
	add_action( 'wp_head', __NAMESPACE__ . '\\expose_module_paths' );
}
bootstrap();

/**
 * Register scripts as modules.
 */
function register_modules(): void {
    $shared_components_uri = plugin_dir_url( __FILE__ ) . 'widgets/dist/shared-web-components.js';
    $shared_components_path = __DIR__ . '/widgets/dist/shared-web-components.js';
    wp_register_script_module(
        'gs-shared-web-components',
        $shared_components_uri,
        [],
        hash_file( 'crc32', $shared_components_path ) ?: filemtime( $shared_components_path )
    );
}

/**
 * Expose the module paths on a browser global for use with dynamic imports.
 *
 * (wp_add_inline_script does not seem to work with script modules as of 6.8.)
 */
function expose_module_paths(): void {
	printf(
		'<script>window.gsComponents = { path: %s };</script>',
		wp_json_encode( plugin_dir_url( __FILE__ ) . 'widgets/dist/shared-web-components.js' )
	);
}

<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'evokelabDBg1gj5');

/** MySQL database username */
define('DB_USER', 'evokelabDBg1gj5');

/** MySQL database password */
define('DB_PASSWORD', 'PeBVPyNvp8');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fc++}|L2:S=TT6Q>YQ0#y~<iCW8,7lFX:N;-eOporoD(YEJ*R[/TG5a+a vv93/z');
define('SECURE_AUTH_KEY',  's/U|{8*</s#[wAe~iN&$Ri,Uwk1=z}f+n.2{|?2E6wMT;K[zYT1GE-Rkv,N?@ b-');
define('LOGGED_IN_KEY',    'M(*UE=_ucEf6fskJdXBo%d~zjd},jPaN8{}&G?RPt9e8qaK*s-4]w|TXi:r+XtUo');
define('NONCE_KEY',        'K`ou+8_LT5>5/y4Z%GuFXHS7-T--|t++<!+137XROykHH-0I[rg7]vFF,#L!.j$q');
define('AUTH_SALT',        'aA[phO=X:c.}Vr[`hRSNBU]_|4iaAaS>5+Rd,z[!<Zy`,L<J743Kr7Qm|)fhz,Z|');
define('SECURE_AUTH_SALT', 'UU1=-p:C.S$:@K28ShQEJ^:ustrqOU*X[9cGMX+i:)hJ<Zp*C#Us>sfi|g:#Y)JL');
define('LOGGED_IN_SALT',   'X&hLd/NR~diS`>h5NnQnGxmUf-xHI7l=8~YZs.8fJDquMv/jS<4Yj?tabi/:;i-T');
define('NONCE_SALT',       'EFn#F@!5r_NX=|4<)i-.cjDz;IcQ{>eiMD+/h_-L<|XUFW3MwU0- T[H;zvceRb|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

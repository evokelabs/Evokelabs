<footer>
	<h1>Get in touch</h1>
	<h2>I'd love to hear from you if you have a project or campaign in the works</h2>
		<ul>
			<a href="mailto:adrian@evokelabs.com"><li><div class="footericon"><img src="<?php bloginfo('template_url'); ?>/img/iconmail.png" alt="Email" /></div>adrian@evokelabs.com</li></a>
			<a href="https://twitter.com/evokelabs" target="_blank"><li><div class="footericon"><img src="<?php bloginfo('template_url'); ?>/img/icontwitter.png" alt="Twitter" /></div>evokelabs</li></a>
			<!--<li><div class="footericon"><img src="<?php bloginfo('template_url'); ?>/img/iconphone.png" alt="Phone" /></div>Skype: Evokelabs</li>-->
			<li><div class="footericon"><img src="<?php bloginfo('template_url'); ?>/img/iconlocation.png" alt="Phone" /></div>
			Sydney | Australia</li>
		</ul>
	<div class="VR"></div>
	<div id="availabilities">
		<h1>Up coming availabilities</h1>
		<?php echo do_shortcode('[sbc id="1" legend="no" title="no" view="3" dropdown="no" weekstart="1"]') ?>
	</div>
</footer>
	<?php wp_footer(); ?>	
	<!-- Don't forget analytics -->	
</body>

</html>

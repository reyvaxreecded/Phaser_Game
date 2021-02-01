
// You can write more code here

/* START OF COMPILED CODE */

class lvl2 extends Phaser.Scene {
	
	constructor() {
		super("lvl2");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_icebergs_2
		const bg_icebergs_2 = this.add.image(0, 0, "bg-icebergs-2");
		bg_icebergs_2.scaleX = 1.014;
		bg_icebergs_2.scaleY = 0.96;
		bg_icebergs_2.setOrigin(0, 0);
		
		// object_tree_large
		this.add.image(96, 512, "object_tree_large");
		
		// object_tree_large_1
		this.add.image(208, 512, "object_tree_large");
		
		// object_tree_small
		this.add.image(160, 544, "object_tree_small");
		
		// object_snowflake
		this.add.image(1104, 224, "object_snowflake");
		
		// object_snowflake_1
		this.add.image(704, 112, "object_snowflake");
		
		// object_snowflake_1_1
		this.add.image(400, 176, "object_snowflake");
		
		// object_snowflake_1_1_1
		this.add.image(208, 96, "object_snowflake");
		
		// object_snowflake_1_1_2
		this.add.image(176, 688, "object_snowflake");
		
		// object_snowflake_1_1_3
		this.add.image(64, 736, "object_snowflake");
		
		// object_snowflake_1_1_4
		this.add.image(1184, 336, "object_snowflake");
		
		// object_igloo
		this.add.image(1152, 512, "object_igloo");
		
		// platform_snow_png
		this.add.image(32, 256, "plateform", "platform_snow.png");
		
		// platform_snow_png_1
		this.add.image(224, 352, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_1
		this.add.image(384, 304, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_2
		this.add.image(544, 384, "plateform", "platform_snow.png");
		
		// block_slide_up_4_png
		this.add.image(736, 352, "plateform", "block_slide_up_4.png");
		
		// block_slide_up_1_png
		this.add.image(416, 736, "plateform", "block_slide_up_1.png");
		
		// block_slide_up_2_png
		this.add.image(416, 672, "plateform", "block_slide_up_2.png");
		
		// block_slide_up_3_png
		this.add.image(480, 608, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_1
		this.add.image(544, 544, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_1_1
		this.add.image(672, 416, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_2
		this.add.image(608, 480, "plateform", "block_slide_up_3.png");
		
		// block_snow_1_left_png
		this.add.image(352, 736, "plateform", "block_snow_1_left.png");
		
		// block_ground_05_mid_png
		this.add.image(480, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1
		this.add.image(736, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2
		this.add.image(544, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3
		this.add.image(608, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4
		this.add.image(672, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_5
		this.add.image(480, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1
		this.add.image(544, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_1
		this.add.image(608, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_1
		this.add.image(672, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_6
		this.add.image(544, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_2
		this.add.image(608, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_2
		this.add.image(672, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2
		this.add.image(736, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_7
		this.add.image(608, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_3
		this.add.image(672, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_3
		this.add.image(736, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_1
		this.add.image(736, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_2
		this.add.image(672, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_3
		this.add.image(736, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_4
		this.add.image(736, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_5_1
		this.add.image(1056, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1
		this.add.image(992, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_3
		this.add.image(928, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_2
		this.add.image(928, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_5_1_2
		this.add.image(992, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_3_2
		this.add.image(864, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_2_1
		this.add.image(864, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_2_5_1_2_1
		this.add.image(928, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_2_1_1
		this.add.image(864, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4_3_1
		this.add.image(864, 736, "plateform", "block_ground_05_mid.png");
		
		// block_slide_down_3_png
		this.add.image(864, 416, "plateform", "block_slide_down_3.png");
		
		// block_slide_down_3_png_1
		this.add.image(928, 480, "plateform", "block_slide_down_3.png");
		
		// block_slide_down_3_png_2
		this.add.image(992, 544, "plateform", "block_slide_down_3.png");
		
		// block_slide_down_3_png_3
		this.add.image(1056, 608, "plateform", "block_slide_down_3.png");
		
		// block_ground_05_mid_png_4_2_5_1_1
		this.add.image(1184, 736, "plateform", "block_ground_05_mid.png");
		
		// object_03_gem_red_png
		const object_03_gem_red_png = this.add.image(800, 672, "collectible", "object_03_gem_red.png");
		object_03_gem_red_png.scaleX = 0.1;
		object_03_gem_red_png.scaleY = 0.1;
		
		// object_01_gem_blue_png
		const object_01_gem_blue_png = this.add.image(480, 336, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png.scaleX = 0.1;
		object_01_gem_blue_png.scaleY = 0.1;
		
		// object_02_gem_green_png
		const object_02_gem_green_png = this.add.image(624, 432, "collectible", "object_02_gem_green.png");
		object_02_gem_green_png.scaleX = 0.1;
		object_02_gem_green_png.scaleY = 0.1;
		
		// object_06_coin_png
		const object_06_coin_png = this.add.image(224, 320, "collectible", "object_06_coin.png");
		object_06_coin_png.scaleX = 0.1;
		object_06_coin_png.scaleY = 0.1;
		
		// object_06_coin_png_1
		const object_06_coin_png_1 = this.add.image(384, 256, "collectible", "object_06_coin.png");
		object_06_coin_png_1.scaleX = 0.1;
		object_06_coin_png_1.scaleY = 0.1;
		
		// object_06_coin_png_2
		const object_06_coin_png_2 = this.add.image(544, 336, "collectible", "object_06_coin.png");
		object_06_coin_png_2.scaleX = 0.1;
		object_06_coin_png_2.scaleY = 0.1;
		
		// object_06_coin_png_3
		const object_06_coin_png_3 = this.add.image(880, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_3.scaleX = 0.1;
		object_06_coin_png_3.scaleY = 0.1;
		
		// object_06_coin_png_4
		const object_06_coin_png_4 = this.add.image(960, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4.scaleX = 0.1;
		object_06_coin_png_4.scaleY = 0.1;
		
		// object_06_coin_png_5
		const object_06_coin_png_5 = this.add.image(1040, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_5.scaleX = 0.1;
		object_06_coin_png_5.scaleY = 0.1;
		
		// object_06_coin_png_6
		const object_06_coin_png_6 = this.add.image(1120, 608, "collectible", "object_06_coin.png");
		object_06_coin_png_6.scaleX = 0.1;
		object_06_coin_png_6.scaleY = 0.1;
		
		// object_04_star_png
		const object_04_star_png = this.add.image(1184, 672, "collectible", "object_04_star.png");
		object_04_star_png.scaleX = 0.1;
		object_04_star_png.scaleY = 0.1;
		
		// object_06_coin_png_1_1
		const object_06_coin_png_1_1 = this.add.image(768, 256, "collectible", "object_06_coin.png");
		object_06_coin_png_1_1.scaleX = 0.1;
		object_06_coin_png_1_1.scaleY = 0.1;
		
		// object_06_coin_png_1_2
		const object_06_coin_png_1_2 = this.add.image(128, 272, "collectible", "object_06_coin.png");
		object_06_coin_png_1_2.scaleX = 0.1;
		object_06_coin_png_1_2.scaleY = 0.1;
		
		// object_06_coin_png_1_3
		const object_06_coin_png_1_3 = this.add.image(688, 352, "collectible", "object_06_coin.png");
		object_06_coin_png_1_3.scaleX = 0.1;
		object_06_coin_png_1_3.scaleY = 0.1;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

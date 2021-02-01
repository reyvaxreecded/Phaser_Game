
// You can write more code here

/* START OF COMPILED CODE */

class lvl8 extends Phaser.Scene {
	
	constructor() {
		super("lvl8");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_icebergs_2
		const bg_icebergs_2 = this.add.image(608, 384, "bg-icebergs-2");
		bg_icebergs_2.scaleX = 1.014;
		bg_icebergs_2.scaleY = 0.96;
		
		// object_tree_large
		this.add.image(208, 496, "object_tree_large");
		
		// object_tree_large_1
		this.add.image(336, 496, "object_tree_large");
		
		// object_tree_small
		this.add.image(272, 528, "object_tree_small");
		
		// object_igloo
		this.add.image(480, 512, "object_igloo");
		
		// object_igloo_1
		this.add.image(640, 512, "object_igloo");
		
		// object_igloo_2
		this.add.image(800, 512, "object_igloo");
		
		// object_tree_large_2
		this.add.image(944, 496, "object_tree_large");
		
		// object_tree_small_1
		this.add.image(1008, 528, "object_tree_small");
		
		// object_tree_large_1_1
		this.add.image(1072, 496, "object_tree_large");
		
		// object_snowflake
		this.add.image(384, 66, "object_snowflake");
		
		// object_snowflake_1
		this.add.image(512, 160, "object_snowflake");
		
		// object_snowflake_2
		this.add.image(768, 32, "object_snowflake");
		
		// object_snowflake_3
		this.add.image(928, 208, "object_snowflake");
		
		// object_snowflake_4
		this.add.image(1120, 128, "object_snowflake");
		
		// object_snowflake_5
		this.add.image(96, 208, "object_snowflake");
		
		// object_snowflake_6
		this.add.image(144, 720, "object_snowflake");
		
		// object_snowflake_7
		this.add.image(496, 688, "object_snowflake");
		
		// object_snowflake_8
		this.add.image(704, 736, "object_snowflake");
		
		// object_snowflake_9
		this.add.image(1008, 736, "object_snowflake");
		
		// object_snowflake_10
		this.add.image(1136, 688, "object_snowflake");
		
		// block_snow_2_left_png
		this.add.image(32, 608, "plateform", "block_snow_2_left.png");
		
		// block_snow_2_mid_1_png
		this.add.image(96, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_1
		this.add.image(160, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_2
		this.add.image(224, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_1_1_1
		this.add.image(544, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_1_2
		this.add.image(416, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_2_2
		this.add.image(736, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_1_3
		this.add.image(672, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_4
		this.add.image(608, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_2_3
		this.add.image(992, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_1_4
		this.add.image(928, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_5
		this.add.image(864, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_mid_1_png_2_3_1
		this.add.image(1120, 608, "plateform", "block_snow_2_mid_1.png");
		
		// block_snow_2_right_png
		this.add.image(1184, 608, "plateform", "block_snow_2_right.png");
		
		// object_03_gem_red_png
		const object_03_gem_red_png = this.add.image(800, 448, "collectible", "object_03_gem_red.png");
		object_03_gem_red_png.scaleX = 0.1;
		object_03_gem_red_png.scaleY = 0.1;
		
		// object_02_gem_green_png
		const object_02_gem_green_png = this.add.image(640, 448, "collectible", "object_02_gem_green.png");
		object_02_gem_green_png.scaleX = 0.1;
		object_02_gem_green_png.scaleY = 0.1;
		
		// object_01_gem_blue_png
		const object_01_gem_blue_png = this.add.image(480, 448, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png.scaleX = 0.1;
		object_01_gem_blue_png.scaleY = 0.1;
		
		// object_06_coin_png
		const object_06_coin_png = this.add.image(128, 560, "collectible", "object_06_coin.png");
		object_06_coin_png.scaleX = 0.1;
		object_06_coin_png.scaleY = 0.1;
		
		// object_06_coin_png_1
		const object_06_coin_png_1 = this.add.image(1136, 560, "collectible", "object_06_coin.png");
		object_06_coin_png_1.scaleX = 0.1;
		object_06_coin_png_1.scaleY = 0.1;
		
		// object_06_coin_png_2
		const object_06_coin_png_2 = this.add.image(400, 560, "collectible", "object_06_coin.png");
		object_06_coin_png_2.scaleX = 0.1;
		object_06_coin_png_2.scaleY = 0.1;
		
		// object_06_coin_png_2_1
		const object_06_coin_png_2_1 = this.add.image(880, 560, "collectible", "object_06_coin.png");
		object_06_coin_png_2_1.scaleX = 0.1;
		object_06_coin_png_2_1.scaleY = 0.1;
		
		// object_06_coin_png_1_1
		const object_06_coin_png_1_1 = this.add.image(720, 560, "collectible", "object_06_coin.png");
		object_06_coin_png_1_1.scaleX = 0.1;
		object_06_coin_png_1_1.scaleY = 0.1;
		
		// object_06_coin_png_3
		const object_06_coin_png_3 = this.add.image(560, 560, "collectible", "object_06_coin.png");
		object_06_coin_png_3.scaleX = 0.1;
		object_06_coin_png_3.scaleY = 0.1;
		
		// object_04_star_png
		const object_04_star_png = this.add.image(1200, 560, "collectible", "object_04_star.png");
		object_04_star_png.scaleX = 0.1;
		object_04_star_png.scaleY = 0.1;
		
		// object_06_coin_png_4
		const object_06_coin_png_4 = this.add.image(272, 464, "collectible", "object_06_coin.png");
		object_06_coin_png_4.scaleX = 0.1;
		object_06_coin_png_4.scaleY = 0.1;
		
		// object_06_coin_png_5
		const object_06_coin_png_5 = this.add.image(1008, 464, "collectible", "object_06_coin.png");
		object_06_coin_png_5.scaleX = 0.1;
		object_06_coin_png_5.scaleY = 0.1;
		
		// object_06_coin_png_6
		const object_06_coin_png_6 = this.add.image(272, 432, "collectible", "object_06_coin.png");
		object_06_coin_png_6.scaleX = 0.1;
		object_06_coin_png_6.scaleY = 0.1;
		
		// object_06_coin_png_7
		const object_06_coin_png_7 = this.add.image(1008, 432, "collectible", "object_06_coin.png");
		object_06_coin_png_7.scaleX = 0.1;
		object_06_coin_png_7.scaleY = 0.1;
		
		// block_snow_2_mid_1_png_2_1
		this.add.image(288, 608, "plateform", "block_snow_2_mid_1.png");
		
		// platform_snow_png
		this.add.image(352, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_1
		this.add.image(416, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_1
		this.add.image(544, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_2
		this.add.image(480, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_1_1
		this.add.image(800, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_2_1
		this.add.image(736, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_2
		this.add.image(672, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_3
		this.add.image(608, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_1_2
		this.add.image(1056, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_2_2
		this.add.image(992, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_3
		this.add.image(928, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_4
		this.add.image(864, 752, "plateform", "platform_snow.png");
		
		// platform_snow_png_2_2_1
		this.add.image(1120, 752, "plateform", "platform_snow.png");
		
		// object_03_gem_red_png_1
		const object_03_gem_red_png_1 = this.add.image(480, 720, "collectible", "object_03_gem_red.png");
		object_03_gem_red_png_1.scaleX = 0.1;
		object_03_gem_red_png_1.scaleY = 0.1;
		
		// object_02_gem_green_png_2
		const object_02_gem_green_png_2 = this.add.image(640, 720, "collectible", "object_02_gem_green.png");
		object_02_gem_green_png_2.scaleX = 0.1;
		object_02_gem_green_png_2.scaleY = 0.1;
		
		// object_06_coin_png_3_1
		const object_06_coin_png_3_1 = this.add.image(560, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_1.scaleX = 0.1;
		object_06_coin_png_3_1.scaleY = 0.1;
		
		// object_06_coin_png_3_2
		const object_06_coin_png_3_2 = this.add.image(720, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_2.scaleX = 0.1;
		object_06_coin_png_3_2.scaleY = 0.1;
		
		// object_01_gem_blue_png_1
		const object_01_gem_blue_png_1 = this.add.image(800, 720, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png_1.scaleX = 0.1;
		object_01_gem_blue_png_1.scaleY = 0.1;
		
		// object_06_coin_png_3_1_1
		const object_06_coin_png_3_1_1 = this.add.image(880, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_1_1.scaleX = 0.1;
		object_06_coin_png_3_1_1.scaleY = 0.1;
		
		// object_06_coin_png_3_1_2
		const object_06_coin_png_3_1_2 = this.add.image(976, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_1_2.scaleX = 0.1;
		object_06_coin_png_3_1_2.scaleY = 0.1;
		
		// object_06_coin_png_3_1_3
		const object_06_coin_png_3_1_3 = this.add.image(1056, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_1_3.scaleX = 0.1;
		object_06_coin_png_3_1_3.scaleY = 0.1;
		
		// object_06_coin_png_3_1_4
		const object_06_coin_png_3_1_4 = this.add.image(1136, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_1_4.scaleX = 0.1;
		object_06_coin_png_3_1_4.scaleY = 0.1;
		
		// object_06_coin_png_3_1_5
		const object_06_coin_png_3_1_5 = this.add.image(400, 720, "collectible", "object_06_coin.png");
		object_06_coin_png_3_1_5.scaleX = 0.1;
		object_06_coin_png_3_1_5.scaleY = 0.1;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

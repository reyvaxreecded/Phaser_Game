
// You can write more code here

/* START OF COMPILED CODE */

class lvl4 extends Phaser.Scene {
	
	constructor() {
		super("lvl4");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_icebergs_1
		const bg_icebergs_1 = this.add.image(608, 384, "bg-icebergs-1");
		bg_icebergs_1.scaleX = 1.014;
		bg_icebergs_1.scaleY = 0.96;
		
		// block_slide_up_4_png
		this.add.image(608, 288, "plateform", "block_slide_up_4.png");
		
		// block_snow_1_left_png
		this.add.image(32, 736, "plateform", "block_snow_1_left.png");
		
		// block_snow_1_mid_1_png
		this.add.image(96, 736, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_1
		this.add.image(160, 736, "plateform", "block_snow_1_mid_1.png");
		
		// block_slide_up_1_png
		this.add.image(224, 736, "plateform", "block_slide_up_1.png");
		
		// block_slide_up_2_png
		this.add.image(224, 672, "plateform", "block_slide_up_2.png");
		
		// block_slide_up_3_png
		this.add.image(288, 608, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_1
		this.add.image(352, 544, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_3
		this.add.image(480, 416, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_4
		this.add.image(544, 352, "plateform", "block_slide_up_3.png");
		
		// block_snow_1_mid_2_png
		this.add.image(672, 288, "plateform", "block_snow_1_mid_2.png");
		
		// block_snow_1_mid_2_png_1
		this.add.image(736, 288, "plateform", "block_snow_1_mid_2.png");
		
		// block_snow_1_mid_2_png_1_1
		this.add.image(800, 288, "plateform", "block_snow_1_mid_2.png");
		
		// block_snow_1_mid_2_png_2_1_1_1
		this.add.image(1120, 288, "plateform", "block_snow_1_mid_2.png");
		
		// block_snow_1_mid_2_png_2_1_2
		this.add.image(1056, 288, "plateform", "block_snow_1_mid_2.png");
		
		// block_snow_1_mid_2_png_2_1_1_1_1
		this.add.image(1184, 288, "plateform", "block_snow_1_mid_2.png");
		
		// block_ground_05_mid_png
		this.add.image(416, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1
		this.add.image(480, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1
		this.add.image(608, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2
		this.add.image(544, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1
		this.add.image(864, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1
		this.add.image(800, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2
		this.add.image(736, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3
		this.add.image(672, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1
		this.add.image(1120, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1
		this.add.image(1056, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1
		this.add.image(992, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_1
		this.add.image(928, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_1
		this.add.image(1056, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_1
		this.add.image(992, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_1
		this.add.image(928, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_1_1
		this.add.image(864, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_2
		this.add.image(800, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_2
		this.add.image(736, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_2
		this.add.image(672, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_2
		this.add.image(608, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_2
		this.add.image(544, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_2
		this.add.image(480, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_3
		this.add.image(416, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_4
		this.add.image(352, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_2
		this.add.image(992, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_2
		this.add.image(928, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_2
		this.add.image(864, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_1_2
		this.add.image(800, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_3
		this.add.image(736, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_3
		this.add.image(672, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_3
		this.add.image(608, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_3
		this.add.image(544, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_3
		this.add.image(480, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_3
		this.add.image(416, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_4
		this.add.image(352, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_5
		this.add.image(288, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_3
		this.add.image(992, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_3
		this.add.image(928, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_3
		this.add.image(864, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_1_3
		this.add.image(800, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_4
		this.add.image(736, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_4
		this.add.image(672, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_4
		this.add.image(608, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_4
		this.add.image(544, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_4
		this.add.image(480, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_4
		this.add.image(416, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_5
		this.add.image(352, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_6
		this.add.image(288, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_3_1
		this.add.image(1184, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_3_1
		this.add.image(1120, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_3_1
		this.add.image(1056, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_3_2
		this.add.image(1184, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_3_2
		this.add.image(1120, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_3_2
		this.add.image(1056, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_1_1
		this.add.image(1184, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_1_1
		this.add.image(1120, 608, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_4
		this.add.image(1184, 544, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_4_1
		this.add.image(1184, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_5
		this.add.image(1120, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_4
		this.add.image(1056, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_4
		this.add.image(992, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_5
		this.add.image(672, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_5
		this.add.image(608, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_5
		this.add.image(544, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_4_1_1
		this.add.image(1184, 352, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_5_1
		this.add.image(1120, 352, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_4_1
		this.add.image(1056, 352, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_5_1
		this.add.image(736, 352, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_3_5_1
		this.add.image(672, 352, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_5_1
		this.add.image(608, 352, "plateform", "block_ground_05_mid.png");
		
		// block_slide_up_3_png_2
		this.add.image(800, 480, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_5
		this.add.image(864, 416, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_3_png_5_1
		this.add.image(928, 352, "plateform", "block_slide_up_3.png");
		
		// block_slide_up_4_png_1
		this.add.image(992, 288, "plateform", "block_slide_up_4.png");
		
		// block_ground_05_mid_png_1_2_1_4_1
		this.add.image(864, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_2_1_1_4_2
		this.add.image(928, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_5_2
		this.add.image(992, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_4_1_2
		this.add.image(1056, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_4_2
		this.add.image(928, 416, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_4_3
		this.add.image(992, 352, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_4_4
		this.add.image(1120, 480, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1_4_5
		this.add.image(1184, 480, "plateform", "block_ground_05_mid.png");
		
		// object_igloo
		this.add.image(1152, 192, "object_igloo");
		
		// object_04_star_png
		const object_04_star_png = this.add.image(1136, 240, "collectible", "object_04_star.png");
		object_04_star_png.scaleX = 0.1;
		object_04_star_png.scaleY = 0.1;
		
		// object_03_gem_red_png
		const object_03_gem_red_png = this.add.image(192, 672, "collectible", "object_03_gem_red.png");
		object_03_gem_red_png.scaleX = 0.1;
		object_03_gem_red_png.scaleY = 0.1;
		
		// object_02_gem_green_png
		const object_02_gem_green_png = this.add.image(1056, 240, "collectible", "object_02_gem_green.png");
		object_02_gem_green_png.scaleX = 0.1;
		object_02_gem_green_png.scaleY = 0.1;
		
		// object_01_gem_blue_png
		const object_01_gem_blue_png = this.add.image(736, 496, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png.scaleX = 0.1;
		object_01_gem_blue_png.scaleY = 0.1;
		
		// object_06_coin_png
		const object_06_coin_png = this.add.image(128, 688, "collectible", "object_06_coin.png");
		object_06_coin_png.scaleX = 0.1;
		object_06_coin_png.scaleY = 0.1;
		
		// object_06_coin_png_1
		const object_06_coin_png_1 = this.add.image(240, 624, "collectible", "object_06_coin.png");
		object_06_coin_png_1.scaleX = 0.1;
		object_06_coin_png_1.scaleY = 0.1;
		
		// object_06_coin_png_2
		const object_06_coin_png_2 = this.add.image(320, 544, "collectible", "object_06_coin.png");
		object_06_coin_png_2.scaleX = 0.1;
		object_06_coin_png_2.scaleY = 0.1;
		
		// object_06_coin_png_3
		const object_06_coin_png_3 = this.add.image(416, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_3.scaleX = 0.1;
		object_06_coin_png_3.scaleY = 0.1;
		
		// object_06_coin_png_4
		const object_06_coin_png_4 = this.add.image(496, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_4.scaleX = 0.1;
		object_06_coin_png_4.scaleY = 0.1;
		
		// object_06_coin_png_5
		const object_06_coin_png_5 = this.add.image(576, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_5.scaleX = 0.1;
		object_06_coin_png_5.scaleY = 0.1;
		
		// object_06_coin_png_6
		const object_06_coin_png_6 = this.add.image(672, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_6.scaleX = 0.1;
		object_06_coin_png_6.scaleY = 0.1;
		
		// object_06_coin_png_7
		const object_06_coin_png_7 = this.add.image(784, 464, "collectible", "object_06_coin.png");
		object_06_coin_png_7.scaleX = 0.1;
		object_06_coin_png_7.scaleY = 0.1;
		
		// object_06_coin_png_8
		const object_06_coin_png_8 = this.add.image(832, 416, "collectible", "object_06_coin.png");
		object_06_coin_png_8.scaleX = 0.1;
		object_06_coin_png_8.scaleY = 0.1;
		
		// object_06_coin_png_9
		const object_06_coin_png_9 = this.add.image(896, 352, "collectible", "object_06_coin.png");
		object_06_coin_png_9.scaleX = 0.1;
		object_06_coin_png_9.scaleY = 0.1;
		
		// object_01_gem_blue_png_1
		const object_01_gem_blue_png_1 = this.add.image(688, 240, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png_1.scaleX = 0.1;
		object_01_gem_blue_png_1.scaleY = 0.1;
		
		// object_06_coin_png_5_1
		const object_06_coin_png_5_1 = this.add.image(608, 256, "collectible", "object_06_coin.png");
		object_06_coin_png_5_1.scaleX = 0.1;
		object_06_coin_png_5_1.scaleY = 0.1;
		
		// object_06_coin_png_5_2
		const object_06_coin_png_5_2 = this.add.image(800, 240, "collectible", "object_06_coin.png");
		object_06_coin_png_5_2.scaleX = 0.1;
		object_06_coin_png_5_2.scaleY = 0.1;
		
		// object_06_coin_png_5_1_1
		const object_06_coin_png_5_1_1 = this.add.image(528, 336, "collectible", "object_06_coin.png");
		object_06_coin_png_5_1_1.scaleX = 0.1;
		object_06_coin_png_5_1_1.scaleY = 0.1;
		
		// object_06_coin_png_5_1_1_1
		const object_06_coin_png_5_1_1_1 = this.add.image(576, 288, "collectible", "object_06_coin.png");
		object_06_coin_png_5_1_1_1.scaleX = 0.1;
		object_06_coin_png_5_1_1_1.scaleY = 0.1;
		
		// object_06_coin_png_5_1_1_2
		const object_06_coin_png_5_1_1_2 = this.add.image(480, 384, "collectible", "object_06_coin.png");
		object_06_coin_png_5_1_1_2.scaleX = 0.1;
		object_06_coin_png_5_1_1_2.scaleY = 0.1;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

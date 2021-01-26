
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
		
		// object_04_star
		const object_04_star = this.add.image(1184, 672, "object_04_star");
		object_04_star.scaleX = 0.1;
		object_04_star.scaleY = 0.1;
		
		// object_03_gem_red
		const object_03_gem_red = this.add.image(896, 672, "object_03_gem_red");
		object_03_gem_red.scaleX = 0.1;
		object_03_gem_red.scaleY = 0.1;
		
		// object_02_gem_green
		const object_02_gem_green = this.add.image(704, 352, "object_02_gem_green");
		object_02_gem_green.scaleX = 0.1;
		object_02_gem_green.scaleY = 0.1;
		
		// object_06_coin_1_2
		const object_06_coin_1_2 = this.add.image(160, 208, "object_06_coin");
		object_06_coin_1_2.scaleX = 0.1;
		object_06_coin_1_2.scaleY = 0.1;
		
		// platform_snow
		this.add.image(32, 176, "platform_snow");
		
		// platform_snow_1
		this.add.image(160, 256, "platform_snow");
		
		// platform_snow_1_1
		this.add.image(368, 368, "platform_snow");
		
		// platform_snow_1_2
		this.add.image(528, 384, "platform_snow");
		
		// block_slide_up_4
		this.add.image(736, 352, "block_slide_up_4");
		
		// block_slide_up_3
		this.add.image(672, 416, "block_slide_up_3");
		
		// block_slide_up_3_1
		this.add.image(608, 480, "block_slide_up_3");
		
		// block_slide_up_3_2
		this.add.image(544, 544, "block_slide_up_3");
		
		// block_slide_up_3_3
		this.add.image(480, 608, "block_slide_up_3");
		
		// block_slide_up_2
		this.add.image(416, 672, "block_slide_up_2");
		
		// block_slide_up_1
		this.add.image(416, 736, "block_slide_up_1");
		
		// block_slide_down_3_1
		this.add.image(928, 480, "block_slide_down_3");
		
		// block_slide_down_3_2
		this.add.image(992, 544, "block_slide_down_3");
		
		// block_slide_down_3_3
		this.add.image(1056, 608, "block_slide_down_3");
		
		// block_snow_1_right
		this.add.image(1184, 736, "block_snow_1_right");
		
		// block_ground_05_mid
		this.add.image(736, 416, "block_ground_05_mid");
		
		// block_ground_05_mid_4
		this.add.image(736, 480, "block_ground_05_mid");
		
		// block_ground_05_mid_5
		this.add.image(672, 480, "block_ground_05_mid");
		
		// block_ground_05_mid_6
		this.add.image(608, 544, "block_ground_05_mid");
		
		// block_ground_05_mid_7
		this.add.image(672, 544, "block_ground_05_mid");
		
		// block_ground_05_mid_8
		this.add.image(736, 544, "block_ground_05_mid");
		
		// block_ground_05_mid_10
		this.add.image(864, 544, "block_ground_05_mid");
		
		// block_ground_05_mid_11
		this.add.image(928, 544, "block_ground_05_mid");
		
		// block_ground_05_mid_12
		this.add.image(992, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_13
		this.add.image(928, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_14
		this.add.image(864, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_16
		this.add.image(736, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_17
		this.add.image(672, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_18
		this.add.image(608, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_19
		this.add.image(544, 608, "block_ground_05_mid");
		
		// block_ground_05_mid_20
		this.add.image(480, 672, "block_ground_05_mid");
		
		// block_ground_05_mid_21
		this.add.image(544, 672, "block_ground_05_mid");
		
		// block_ground_05_mid_20_1
		this.add.image(608, 672, "block_ground_05_mid");
		
		// block_ground_05_mid_21_1
		this.add.image(672, 672, "block_ground_05_mid");
		
		// block_ground_05_mid_20_2
		this.add.image(736, 672, "block_ground_05_mid");
		
		// block_ground_05_mid_21_1_1_2_1
		this.add.image(1056, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_21_1_1_1_1
		this.add.image(992, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_21_1_1_3
		this.add.image(928, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_20_1_1_1
		this.add.image(864, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_20_2_1
		this.add.image(736, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_21_1_2
		this.add.image(672, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_20_1_2
		this.add.image(608, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_21_3
		this.add.image(544, 736, "block_ground_05_mid");
		
		// block_ground_05_mid_20_3
		this.add.image(480, 736, "block_ground_05_mid");
		
		// block_snow_1_left
		this.add.image(352, 736, "block_snow_1_left");
		
		// block_slide_down_3
		this.add.image(864, 416, "block_slide_down_3");
		
		// block_ground_05_mid_1
		this.add.image(864, 480, "block_ground_05_mid");
		
		// object_01_gem_blue
		const object_01_gem_blue = this.add.image(272, 304, "object_01_gem_blue");
		object_01_gem_blue.scaleX = 0.1;
		object_01_gem_blue.scaleY = 0.1;
		
		// object_06_coin_1_2_1
		const object_06_coin_1_2_1 = this.add.image(368, 320, "object_06_coin");
		object_06_coin_1_2_1.scaleX = 0.1;
		object_06_coin_1_2_1.scaleY = 0.1;
		
		// object_06_coin_1_2_2
		const object_06_coin_1_2_2 = this.add.image(528, 336, "object_06_coin");
		object_06_coin_1_2_2.scaleX = 0.1;
		object_06_coin_1_2_2.scaleY = 0.1;
		
		// object_06_coin_1_2_3
		const object_06_coin_1_2_3 = this.add.image(1104, 624, "object_06_coin");
		object_06_coin_1_2_3.scaleX = 0.1;
		object_06_coin_1_2_3.scaleY = 0.1;
		
		// object_06_coin_1_2_4
		const object_06_coin_1_2_4 = this.add.image(800, 672, "object_06_coin");
		object_06_coin_1_2_4.scaleX = 0.1;
		object_06_coin_1_2_4.scaleY = 0.1;
		
		// object_06_coin_1_2_5
		const object_06_coin_1_2_5 = this.add.image(640, 400, "object_06_coin");
		object_06_coin_1_2_5.scaleX = 0.1;
		object_06_coin_1_2_5.scaleY = 0.1;
		
		// object_06_coin_1_2_6
		const object_06_coin_1_2_6 = this.add.image(976, 672, "object_06_coin");
		object_06_coin_1_2_6.scaleX = 0.1;
		object_06_coin_1_2_6.scaleY = 0.1;
		
		// object_06_coin_1_2_7
		const object_06_coin_1_2_7 = this.add.image(1072, 672, "object_06_coin");
		object_06_coin_1_2_7.scaleX = 0.1;
		object_06_coin_1_2_7.scaleY = 0.1;
		
		// object_06_coin_1_2_8
		const object_06_coin_1_2_8 = this.add.image(800, 272, "object_06_coin");
		object_06_coin_1_2_8.scaleX = 0.1;
		object_06_coin_1_2_8.scaleY = 0.1;
		
		// object_06_coin_1_2_9
		const object_06_coin_1_2_9 = this.add.image(448, 272, "object_06_coin");
		object_06_coin_1_2_9.scaleX = 0.1;
		object_06_coin_1_2_9.scaleY = 0.1;
		
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
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_icebergs_1
		this.add.image(608, 208, "bg-icebergs-1");
		
		// block_snow_1_left_png
		const block_snow_1_left_png = this.add.image(32, 576, "plateform", "block_snow_1_left.png");
		
		// block_snow_1_mid_1_png
		const block_snow_1_mid_1_png = this.add.image(96, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_1
		const block_snow_1_mid_1_png_1 = this.add.image(160, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_2
		const block_snow_1_mid_1_png_2 = this.add.image(224, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_3
		const block_snow_1_mid_1_png_3 = this.add.image(288, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_4
		const block_snow_1_mid_1_png_4 = this.add.image(352, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_5
		const block_snow_1_mid_1_png_5 = this.add.image(416, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_6
		const block_snow_1_mid_1_png_6 = this.add.image(480, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_7
		const block_snow_1_mid_1_png_7 = this.add.image(544, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_8
		const block_snow_1_mid_1_png_8 = this.add.image(608, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_9
		const block_snow_1_mid_1_png_9 = this.add.image(672, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_10
		const block_snow_1_mid_1_png_10 = this.add.image(736, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_11
		const block_snow_1_mid_1_png_11 = this.add.image(800, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_12
		const block_snow_1_mid_1_png_12 = this.add.image(864, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_13
		const block_snow_1_mid_1_png_13 = this.add.image(928, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_14
		const block_snow_1_mid_1_png_14 = this.add.image(992, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_15
		const block_snow_1_mid_1_png_15 = this.add.image(1056, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_16
		const block_snow_1_mid_1_png_16 = this.add.image(1120, 576, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_right_png
		const block_snow_1_right_png = this.add.image(1184, 576, "plateform", "block_snow_1_right.png");
		
		// player
		const player = this.add.sprite(80, 512, "pinguin", 10);
		player.visible = false;
		
		// player_1
		const player_1 = new Player(this, 80, 512);
		this.add.existing(player_1);
		
		// block_snow_1_left_png (components)
		new PlatformPhysics(block_snow_1_left_png);
		
		// block_snow_1_mid_1_png (components)
		new PlatformPhysics(block_snow_1_mid_1_png);
		
		// block_snow_1_mid_1_png_1 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_1);
		
		// block_snow_1_mid_1_png_2 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_2);
		
		// block_snow_1_mid_1_png_3 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_3);
		
		// block_snow_1_mid_1_png_4 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_4);
		
		// block_snow_1_mid_1_png_5 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_5);
		
		// block_snow_1_mid_1_png_6 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_6);
		
		// block_snow_1_mid_1_png_7 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_7);
		
		// block_snow_1_mid_1_png_8 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_8);
		
		// block_snow_1_mid_1_png_9 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_9);
		
		// block_snow_1_mid_1_png_10 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_10);
		
		// block_snow_1_mid_1_png_11 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_11);
		
		// block_snow_1_mid_1_png_12 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_12);
		
		// block_snow_1_mid_1_png_13 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_13);
		
		// block_snow_1_mid_1_png_14 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_14);
		
		// block_snow_1_mid_1_png_15 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_15);
		
		// block_snow_1_mid_1_png_16 (components)
		new PlatformPhysics(block_snow_1_mid_1_png_16);
		
		// block_snow_1_right_png (components)
		new PlatformPhysics(block_snow_1_right_png);
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

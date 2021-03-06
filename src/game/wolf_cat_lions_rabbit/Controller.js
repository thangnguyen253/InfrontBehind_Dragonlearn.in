class Controller extends Phaser.Scene{
    constructor(){
        super("Controller");
    }
    preload(){
        this.load.svg('play', '../assets/play_button.svg',{width:"400", height:"400"});
        this.load.svg('sound', '../assets/loa.svg',{width:"100", height:"100"});
        this.load.svg('road', '../assets/42.svg',{width: "2000", height: "2000"});
        this.load.svg('circle_drop', '../assets/334.svg',{width: "200", height: "200"});
        this.load.svg('lions', '../assets/354.svg',{width: "300", height: "300"});
        this.load.svg('wolf', '../assets/48.svg',{width: "200", height: "200"});
        this.load.svg('drop', '../assets/52.svg',{width:"200", height:"200"});
        this.load.svg('cat', '../assets/338.svg',{width:"200", height:"200"});
        this.load.svg('rabbits', '../assets/358.svg',{width:"300", height:"300"});
    }
    create(){
        this.scene_opening();
    }
    scene_opening(){
        //init start button
        this.start_button = this.physics.add.sprite(this.cameras.main.centerX, 
            this.cameras.main.centerY, 'play').setInteractive({ pixelPerfect: true}).setOrigin(0.5);

        this.start_button.once('pointerup', () => {    
            scnmng.create_game(Game2);
            this.road = scnmng.item_factory(0, -400, 'road')./* preset alpha: */setDepth(-2);
            scnmng.destroy(this.start_button);
        });
    }
}
const Game2 = {
    obstacle_item: [
        {
            item: 'lions',
            X: 800,
            Y: 400,
        },
        {
            item: 'rabbits',
            X: 800,
            Y: 400,
        }
    ],
    drop_item: [
        {
            item: 'drop',
            description: 'in front of',
            DROPX: 200,
            DROPY: 500
        },
        {
            item: 'drop',
            description: 'behind of',
            DROPX: 1500,
            DROPY: 500
        }
    ],
    drag_item: [
        {
            item: 'cat',
            DRAGX: 850,
            DRAGY: 800,
            infront: [200, 400],
            behind: [1500, 400]
        },
        {
            item: 'wolf',
            DRAGX: 850,
            DRAGY: 800,
            infront: [200, 400],
            behind: [1500, 400]
        }
    ],
}
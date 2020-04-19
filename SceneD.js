
class SceneD extends Phaser.Scene {

    constructor ()
    {
        super('SceneD');
        this.drag_X = 1200;
        this.drag_Y = 500;
        this.drop_X = 700;
        this.drop_Y = 100;
    }


    create ()
    {
        var Controller = this.scene.get('Controller');

        this.drop = Controller.item_factory(this.drop_X,this.drop_Y,'drop').setOrigin(0,0)
        this.drag = Controller.item_factory(this.drag_X,this.drag_Y,'drag');

        this.drop.setScale(1.5);
        this.drag.setScale(1.5);
        

        Controller.setDraggable(this.drag);
        Controller.setDroppable(this.drop);

        Controller.drag_and_drop(this.drag,this.drop);
    }

    
    invoke_next_scene(item){
        var Controller = this.scene.get('Controller');
        Controller.scene.launch("SceneA");
        item = Controller.scene.get("SceneA");
        return item;
    }
}
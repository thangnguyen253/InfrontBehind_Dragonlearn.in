class Speaker extends Phaser.Scene{
    constructor(){
        super("Speaker");
    }

    /**
     * invoke when click to item and output the audio from text
     * @param {Phaser.Object} item - could be text, sprite as long as Phaser.Object and interactable
     * @param {text} messeage - text to convert to audio speaker
     */
    say(item, messeage) {
        item.on('pointerdown', () => this.voice(messeage))
    }
    voice(messeage){
        let msg = new SpeechSynthesisUtterance();
            let voices = window.speechSynthesis.getVoices();
            msg.voice = voices[this.scene.get('SceneManager').get_random_int(0,10)];
            msg.voiceURI = "native";
            msg.volume = 1;
            msg.rate = 1;
            msg.pitch = 0.8;
            msg.text = messeage;
            msg.lang = 'en-US';
            speechSynthesis.speak(msg); 
    }
}
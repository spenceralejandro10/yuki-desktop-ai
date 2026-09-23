class YukiAnimator {
  constructor(image, config) { this.image=image; this.config=config; this.timer=null; this.current=null; this.frame=1; }
  play(name) {
    const a=this.config[name]; if(!a) return;
    clearInterval(this.timer); this.current=name; this.frame=1; this.draw();
    this.timer=setInterval(()=>{ this.frame++; if(this.frame>a.frames){ if(a.loop)this.frame=1; else {clearInterval(this.timer); return;} } this.draw(); },1000/a.fps);
  }
  draw() {
    const n=String(this.frame).padStart(2,"0");
    this.image.src=`../../assets/yuki/sprites/${this.current}/${this.current}_${n}.png`;
  }
}
window.YukiAnimator=YukiAnimator;

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-window-frame',
  template: `
  	<p>App works!?</p>

  	<div class="container" [style.height]="_height">
  		<div class="sidebar left" (click)="leftScroll()">
  			<div class="fill"></div>
  			<img src="l_arrow.png" alt="HTML5 Icon" style="width:128px;height:128px;">
  			<div class="fill"></div>
  		</div>

  		<div class="content" [innerHTML]="data[pos]">
  			
  		</div>

  		<div class="sidebar right" (click)="rightScroll()">
  		  	<div class="fill"></div>
  			<img src="r_arrow.png" alt="HTML5 Icon" style="width:128px;height:128px;">
  			<div class="fill"></div>
  		</div>
  	</div>
  `,
  styles: [`

  	.container {
	    display:flex;
	    flex-direction:row;
  		width: 100%;
  		border: solid 1px black;
  		overflow: hidden;
  	}

  	.left {
  		background: linear-gradient(to right, #E8E8E8, white);
  	}

  	.right {
  		background: linear-gradient(to right, white, #E8E8E8);
  	}

  	.sidebar {
	    display:flex;
	    flex-direction:column; 
	   	flex-basis: 1;
  		overflow: hidden;
  	}

  	.sidebar:hover{
  		opacity: .8;
  	}

   	.sidebar:hover img{
  		opacity: .4;
  	}

  	.sidebar:active img{
  		opacity: .2;
  	}

  	.content {
	    display:flex;
	    flex-direction:column; 
	   	flex-grow: 8;
  	}

  	img {
  		max-width: 100%;
  		opacity: 0;
  	}

  	.fill {
  		flex-grow: 1;
  	}

  `]
})
export class WindowFrameComponent implements OnInit {
	@Input('h') _height: string = '500px';
	@Input('h') _contet: any[];
	@Input('data') data: string[] = [
		'<h1>hi</h1>', 
		'<h2>there</h2>', 
		'<h3>this</h3>', 
		'<h4>is</h4>', 
		'<h5>a</h5>',
		'<h6>test</h6>'
	];

	first: number = 0;
	last: number;
	pos: number = 0;

	ngOnInit(){
		this.pos = 0;
		this.last = this.data.length-1;
	}


	leftScroll(){
		if (this.pos > 0){
			this.pos = this.pos - 1;
		}

		if (this.pos == 0){
			//make left sidebar unclickable
		}
	}

	rightScroll(){
		if (this.pos < this.last){
			this.pos = this.pos + 1;
		}

		if (this.pos == this.last){
			//make right sidebar unclickable
		}
	}
}

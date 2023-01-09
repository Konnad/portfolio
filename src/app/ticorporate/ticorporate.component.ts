import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-ticorporate',
  templateUrl: './ticorporate.component.html',
  styleUrls: ['./ticorporate.component.css'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class TicorporateComponent implements OnInit {
  
  showPOText = false;
  
  showMarketingText = false;
  showTechText = false;
  constructor() { }

  ngOnInit(): void {
  }
  codeDeckts = `
//deck.component.ts

<span class="keyword">import</span> { Component, OnInit } <span class="keyword">from</span> '@angular/core';
<span class="keyword">import</span> { KORTIT } <span class="keyword">from</span> '../mock-cards';
<span class="keyword">import</span> { Kortti } <span class="keyword">from</span> '../kortti';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export <span class="keyword">class</span> DeckComponent <span class="keyword">implements</span> OnInit {
  loppu = <span class="value">false</span>; <span class="comment">// Onko peli loppu vai ei</span>
  kortit = KORTIT;
  korttiLkm = <span class="value">1</span>; <span class="comment">// Montako korttia on pelattu</span>
  constructor() { }

  shufflatutKortit: <span class="keyword">any</span>[] = []; <span class="comment">// Shufflattu korttipakka</span>
  pelatutKortit: <span class="keyword">any</span>[] = []; <span class="comment">// Taulukko pelatuille korteille. Lähinnä debuggausta varten</span>

  <pre>
  <code>
    ngOnInit(): <span class="keyword">void</span> {
      this.shufflatutKortit = this.shuffle(this.kortit); <span class="comment">// Shufflaa kortit</span>
    }
    
    shuffle(kortit: Kortti[]): Kortti[] {
      <span class="keyword">for</span> (<span class="keyword">let</span> i = kortit.length - <span class="value">1</span>; i > <span class="value">0</span>; i--) {
        <span class="keyword">const</span> j = Math.floor(Math.random() * (i + <span class="value">1</span>));
        [kortit[i], kortit[j]] = [kortit[j], kortit[i]];
      }
      <span class="keyword">return</span> kortit;
    } <span class="comment">// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array</span>
    
    seuraava(): <span class="keyword">void</span> {
      this.korttiLkm++;
      this.pelatutKortit.push(this.shufflatutKortit[<span class="value">0</span>]);
      this.shufflatutKortit.splice(<span class="value">0</span>, <span class="value">1</span>);
      <span class="keyword">if</span> (this.shufflatutKortit.length === <span class="value">0</span>) {
        this.loppu = <span class="value">true</span>;
    }
  }
    uusiPeli(): <span class="keyword">void</span> {
      this.loppu = <span class="value">false</span>;
      this.shufflatutKortit = [];
      this.korttiLkm = <span class="value">1</span>
      this.shufflatutKortit = <span class="value">this.shuffle(this.kortit);</span>
      this.pelatutKortit = [];
  }
}
  `

  codeDeckHTML = `
  //Deck.component.html

<div *ngIf="korttiLkm <= 52" class="kortit">
  <h2>Nykyinen kortti</h2>
  <h3>{{this.shufflatutKortit[0].maa}} {{this.shufflatutKortit[0].arvo}}</h3>
  <p>Kortti nro {{korttiLkm}}/52</p>
  <button type="button" (click)="seuraava()">Seuraava kortti</button>
</div>

<div *ngIf="korttiLkm > 52" class="kortit">
  <h2>Peli on päättynynt</h2>
  <p>Aloitetaanko uusi peli?</p>
  <button type="button" (click)="uusiPeli()">Uusi peli</button>
</div>

<h2>Käytetty</h2>
<ul>
  <li *ngFor="let kortti of this.pelatutKortit">{{this.kortti.maa}} {{this.kortti.arvo}}</li>
</ul>


<h4>Jäljellä kortit</h4>
<ul>

  <li *ngFor="let kortti of shufflatutKortit">{{kortti.maa}} {{kortti.arvo}}</li>
</ul>`

  latestCode = `
  changePlayer() {
    this.numcount++;
    if (this.numcount != 0 && this.numcount % 2 === 0) {
      // Get the index of the current turn in the playerArr array
      this.curPlayerId = this.players.indexOf(this.curTurn);
      // Set the curPlayer property to the player at the current index in the playerArr array
      this.curPlayer = this.players[this.curPlayerId];
      // Set the nextPlayerId property to the current player's index plus one
      this.nextPlayerId = this.curPlayerId + 1;
      // If the next player's index is greater than the length of the playerArr array,
      // reset it to 0 (start back at the first player in the array)
      if (this.nextPlayerId > this.players.length - 1) {
        this.nextPlayerId = 0;
      }
      // If the next player's index is less than 0, set it to the last player in the array
      if (this.nextPlayerId < 0) {
        this.nextPlayerId = this.players.length - 1;
      }
      this.curPlayer = this.players[this.nextPlayerId];
      this.curPlayerId = this.nextPlayerId;

      // Set the curPlayer property to the player at the current index in the playerArr array
      this.curPlayer = this.players[this.curPlayerId];
      // Set the nextPlayer property to the player at the new nextPlayerId index in the playerArr array
      this.nextPlayer = this.players[this.nextPlayerId];
      // Update the curTurn property to the nextPlayer
      this.curTurn = this.nextPlayer;
    }
  }`
}

import { Component, OnInit } from '@angular/core';
import {votesArray} from './initial-votings';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {

  constructor() { }
  votings = votesArray;
  showPanel: boolean = true;

  //array containing individual item's votes-to-be before being submitted
  currentVotes = [];

  ngOnInit(): void {
    let storedVotes = JSON.parse(localStorage.getItem('test-votes'));
    console.log('votess', storedVotes);
    if(!storedVotes){
      this.saveVotes();
    }else{
      this.votings = storedVotes;
    }
  }

  //saves current votes object into local storage
  saveVotes(){
    localStorage.setItem('test-votes', JSON.stringify(this.votings));
  }

  //set the vote for the given item into an array, before being submitted
  setVote(index: number, voteType: string){
    this.currentVotes[index]= voteType;
  }

  //modify voting object to increase respective votes up or down and then save to local storage
  submitVote(index: number){
    if (this.currentVotes[index]) {
      let element = {...this.votings[index]};
      element.totalVotes++;
      this.currentVotes[index] == 'up' ? element.upVotes++ : element.downVotes++;
      this.currentVotes[index] = 'done';
      this.votings[index] = element;
      this.saveVotes();      
    }
  }

  //function to let the user vote again, resetting the respective item in the array
  voteAgain(index: number){
    this.currentVotes[index] = undefined;
  }

}

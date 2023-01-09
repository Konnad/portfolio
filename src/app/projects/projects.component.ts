import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project(
      '1',
      'Project 1',
      'This is a description of project 1',
      'assets/project1.jpg'
    ),
    new Project(
      '2',
      'Project 2',
      'This is a description of project 2',
      'assets/project2.jpg'
    ),
    new Project(
      '3',
      'Project 3',
      'This is a description of project 3',
      'assets/project3.jpg'
    ),
    new Project(
      '4',
      'Project 4',
      'This is a description of project 4',
      'assets/project4.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

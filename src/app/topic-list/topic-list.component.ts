import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Comment } from "../comment.model";
import { Topic } from "../topic.model";
import { TopicService } from "../topic.service";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
  styleUrls: ["./topic-list.component.css"],
  providers: [TopicService]
})
export class TopicListComponent implements OnInit {
  topics: Topic[];
  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {}
}

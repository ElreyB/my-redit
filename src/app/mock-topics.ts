import { Comment } from "./comment.model";
import { Topic } from "./topic.model";

export const TOPICS: Topic[] = [
  new Topic(
    "FBI is now investigating Puerto Rico power contract",
    "https://uk.reuters.com/article/uk-usa-puertorico-power-fbi/fbi-investigating-puerto-rico-power-contract-wsj-idUKKBN1CZ27F",
    1
  ),
  new Topic(
    "Ex-Trump Campaign Foreign Advisor George Papadopoulos Secretly Pleaded Guilty",
    "https://www.bloomberg.com/news/articles/2017-10-30/trump-foreign-policy-adviser-pleaded-guilty-in-mueller-probe",
    2
  ),
  new Topic(
    "71 Michigan water systems now have higher lead levels than Flint",
    "http://www.mlive.com/news/flint/index.ssf/2017/10/71_michigan_water_systems_had.html",
    3
  )
];

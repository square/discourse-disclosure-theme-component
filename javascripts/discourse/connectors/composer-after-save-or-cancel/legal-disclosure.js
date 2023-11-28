import Component from "@glimmer/component";

export default class BeforeDisclosure extends Component {
  get showDisclosure() {
    let category_ids = settings.category_ids
      .split("|")
      .map((id) => parseInt(id, 10));
    return category_ids.includes(this.args.outletArgs.model.category?.id);
  }
}

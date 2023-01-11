import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnChanges {
  public starWidth: number | undefined;

  @Input()
  public rating: number = 2;

  ngOnChanges() {
    this.starWidth = (this.rating * 125) / 5;
  }

  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  public sendRating(): void {
    this.starRatingClicked.emit(`la note est de ${this.rating}`);
  }
}

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[divTransform]"
})
export class DivTransform implements OnInit {
  @Input("divTransform")
  private animationType: string;

  @Input("duration")
  private animationDuration: string;

  @Input("iterationCount")
  private animationIterationCount: string;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.width = "100px";
    this.elRef.nativeElement.style.height = "150px";
  }
  @HostListener("mouseover")
  onMouseOver() {
    // Setting the animation using elRef Native Property
    this.elRef.nativeElement.style.animation = `${this.animationType} ${
      this.animationDuration
    }s ${this.animationIterationCount}`;
    this.elRef.nativeElement.style.animationDirection = "alternate";
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.elRef.nativeElement.style.animation = "";
    this.elRef.nativeElement.style.animationDirection = "";
  }
}

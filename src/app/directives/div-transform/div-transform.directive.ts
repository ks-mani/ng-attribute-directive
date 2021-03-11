import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[divTransform]"
})
export class DivTransform implements OnInit {
  @Input("animationType")
  private animationType: string;

  @Input("duration")
  private animationDuration: string;

  constructor(private elRef: ElementRef) {}

  @HostBinding("style.animation")
  private animation: string;

  @HostBinding("style.animationDirection")
  private animationDirection: string;

  ngOnInit(): void {
    this.elRef.nativeElement.style.width = "100px";
    this.elRef.nativeElement.style.height = "150px";
  }
  @HostListener("mouseover")
  onMouseOver() {
    // Setting the animation using elRef Native Property
    this.animation = `${this.animationType} ${
      this.animationDuration
    }s infinite`;
    this.animationDirection = "alternate";
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.animation = "";
    this.animationDirection = "";
  }
}

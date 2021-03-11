import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[divBorder]"
})
export class DivBorder {
  @Input("duration")
  private hoverDuration: string;

  constructor(private elRef: ElementRef) {}

  @HostListener("mouseover")
  onMouseOver() {
    this.elRef.nativeElement.style.border = "solid 1px #b87fff";

    setTimeout(() => {
      this.elRef.nativeElement.style.border = "";
    }, parseInt(this.hoverDuration) * 1000);
  }
}

import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[fullScreenSpan]"
})
export class FullScreenSpan {
  private timerId: any; // Debouncinig Variable
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.height = window.innerHeight - 16 + "px";
    this.elRef.nativeElement.style.width = "100%";
  }

  @HostListener("window:resize")
  onWindowResize() {
    // Debouncing
    if (this.timerId) clearTimeout(this.timerId);

    this.timerId = setTimeout(() => {
      this.elRef.nativeElement.style.height = window.innerHeight - 16 + "px";
    }, 10);
  }
}

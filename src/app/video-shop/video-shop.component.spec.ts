import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VideoShopComponent } from "./video-shop.component";

describe("VideoShopComponent", () => {
  let component: VideoShopComponent;
  let fixture: ComponentFixture<VideoShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoShopComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

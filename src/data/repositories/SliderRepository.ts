import type { ISliderRepository } from '../../domain/interfaces/repositories'
import type { HeroSlide } from '../../domain/models/Slide'
import { slidesMock } from '../mock/slides.mock'

export class SliderRepository implements ISliderRepository {
  getSlides(): HeroSlide[] {
    return slidesMock
  }
}

export const sliderRepository = new SliderRepository()

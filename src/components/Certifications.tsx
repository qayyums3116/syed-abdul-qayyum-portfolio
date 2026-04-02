import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

const Certifications = () => {
  const autoplayPlugin = useCallback(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    []
  );

  const certificates = [
    { id: 1, image: '/Certificates/1.png' },
    { id: 2, image: '/Certificates/2.png' },
    { id: 3, image: '/Certificates/3.png' },
    { id: 4, image: '/Certificates/4.png' },
  ];

  return (
    <section
      id="certifications"
      className="py-10 sm:py-14 md:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="hero-text">Certifications</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Recognitions and achievements that showcase my continuous growth and learning journey
          </p>
        </motion.div>

        {/* Certificates Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[autoplayPlugin()]}
            className="w-full relative px-10 xs:px-12 sm:px-14 md:px-16 lg:px-20"
          >
            <CarouselContent>
              {certificates.map((cert) => (
                <CarouselItem key={cert.id} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center px-1 sm:px-2 lg:px-4"
                  >
                    <Card className="glass hover:shadow-2xl transition-all duration-500 group hover:scale-[1.01] interactive w-full max-w-3xl">
                      <CardContent className="p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 flex justify-center items-center">
                        {/* Frame for Certificate */}
                        <div className="w-full h-[200px] xs:h-[240px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[500px] flex items-center justify-center overflow-hidden rounded-lg border-2 xs:border-3 sm:border-4 md:border-6 lg:border-8 border-gray-900 shadow-xl">
                          {/* Inner mat layer */}
                          <div className="w-[96%] h-[96%] flex items-center justify-center rounded-md bg-[#e4dcd4] border xs:border-2 sm:border-3 md:border-4 border-gray-200">
                            <img
                              src={cert.image}
                              alt={`Certificate ${cert.id}`}
                              className="max-h-full max-w-full object-contain shadow-sm"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 glass border-primary/50 hover:bg-primary/20 hover:border-primary hover:shadow-lg w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-all duration-300 hover:scale-110 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 glass border-primary/50 hover:bg-primary/20 hover:border-primary hover:shadow-lg w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-all duration-300 hover:scale-110 z-10" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-muted-foreground/30 hover:bg-primary/60 transition-all duration-300 hover:scale-125 focus:bg-primary focus:scale-125"
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

'use client'

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpFromDot } from "lucide-react";

export default function ToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <Button onClick={scrollToTop} className="fixed bottom-6 right-6 md:right-10 md:bottom-10 z-50  duration-300 transition-opacity !py-8" style={{ opacity: show ? 1 : 0 }}>
          <ArrowUpFromDot size={24} onClick={scrollToTop} />
        </Button>
  );
}

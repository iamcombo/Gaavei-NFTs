import { IconArrowUp } from "@tabler/icons-react";
import { Affix, Button, Transition, rem } from "@mantine/core";

const ScrollToTop = ({
  scroll,
  scrollTo
}: any) => {
  return (
    <Affix position={{ bottom: rem(40), left: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            color='dark'
            leftIcon={<IconArrowUp size="1rem" />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            radius={8}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
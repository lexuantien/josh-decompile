import React from 'react';
import styled, {
    keyframes
} from 'styled-components';

import {
    generateId,
    random,
    range,
    sample,
    clamp
} from '@utils';
import useSound from '@hooks/use-sound.hook';
import useIsOnscreen from '@hooks/use-is-onscreen.hook';
import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';
import useRandomInterval from '@hooks/use-random-interval.hook';

import UnstyledButton from '@components/UnstyledButton';

const defaultGeneratePosition = (size) => {
    let style = {};
    style.left = random(0, 100) + '%';
    style.zIndex = sample([1, 3])[0];

    if (Math.random() > 0.5) {
        style.top = size * 0.5;
    } else {
        style.bottom = -size * 0.5;
    }

    return style;
};

const generateSparkle = (
    colors,
    minSize,
    maxSize,
    generatePosition
) => {
    const size = random(minSize, maxSize);

    const sparkle = {
        id: generateId(),
        color: sample(colors)[0],
        size,
        numOfPoints: 4,
        createdAt: Date.now(),
        style: generatePosition(size),
    };

    return sparkle;
};

const Sparkles = ({
    rate = 250,
    variance = 200,
    minSize = 10,
    maxSize = 20,
    colors = ['#FFC700'],
    children,
    isToggleable = true,
    style = {},
    generatePosition = defaultGeneratePosition,
    delayBy = 0,
    ...delegated
}) => {
    const [sparkles, setSparkles] = React.useState(() => []);
    const [hasDelayElapsed, setHasDelayElapsed] = React.useState(
        delayBy === 0
    );

    const [isEnabled, setIsEnabled] = React.useState(true);
    const ref = React.useRef();
    const isOnscreen = useIsOnscreen(ref);

    const [playOn] = useSound('/sounds/switch-on.mp3');
    const [playOff] = useSound('/sounds/switch-off.mp3');

    const prefersReducedMotion = usePrefersReducedMotion();

    const shouldAnimate = hasDelayElapsed && !prefersReducedMotion;

    useRandomInterval(
        () => {
            if (!isOnscreen || !isEnabled) {
                return;
            }

            const sparkle = generateSparkle(
                colors,
                minSize,
                maxSize,
                generatePosition
            );

            const now = Date.now();

            const nextSparkles = sparkles.filter((sp) => {
                const delta = now - sp.createdAt;
                return delta < 1000;
            });

            nextSparkles.push(sparkle);

            setSparkles(nextSparkles);
        },
        shouldAnimate ? rate - variance : null,
        shouldAnimate ? rate + variance : null
    );

    React.useEffect(() => {
        if (!delayBy) {
            return;
        }

        const timeoutId = window.setTimeout(
            () => setHasDelayElapsed(true),
            delayBy
        );

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, []);

    return ( <
        Wrapper ref = {
            ref
        }
        as = {
            isToggleable ? UnstyledButton : 'div'
        }
        onClick = {
            () => {
                if (!isToggleable) {
                    return;
                }
                setIsEnabled(!isEnabled);

                if (isEnabled) {
                    playOff();
                } else {
                    playOn();
                }
            }
        }
        style = {
            {
                ...style,
                cursor: isToggleable ? 'pointer' : 'default',
            }
        } { ...delegated
        } >
        {
            sparkles.map((sparkle) => ( <
                Sparkle key = {
                    sparkle.id
                }
                color = {
                    sparkle.color
                }
                size = {
                    sparkle.size
                }
                numOfPoints = {
                    sparkle.numOfPoints
                }
                style = {
                    sparkle.style
                }
                />
            ))
        } <
        ChildWrapper > {
            children
        } < /ChildWrapper> <
        /Wrapper>
    );
};

const Sparkle = ({
    size,
    color,
    style,
    numOfPoints = 4
}) => {
    const path =
        numOfPoints === 4 ?
        'M92 0C92 0 96 63.4731 108.263 75.7365C120.527 88 184 92 184 92C184 92 118.527 98 108.263 108.263C98 118.527 92 184 92 184C92 184 86.4731 119 75.7365 108.263C65 97.5269 0 92 0 92C0 92 63.9731 87.5 75.7365 75.7365C87.5 63.9731 92 0 92 0Z' :
        'M34 0C34 0 33.4886 20.0074 41.7749 26.3376C50.0612 32.6678 68 25.9737 68 25.9737C68 25.9737 49.7451 31.6449 46.58 41.8873C43.4149 52.1298 55.0132 68 55.0132 68C55.0132 68 44.2424 51.4976 34 51.4976C23.7576 51.4976 12.9868 68 12.9868 68C12.9868 68 24.5851 52.1298 21.42 41.8873C18.2549 31.6449 0 25.9737 0 25.9737C0 25.9737 17.9388 32.6678 26.2251 26.3376C34.5114 20.0074 34 0 34 0Z';

    return ( <
        SparkleWrapper style = {
            style
        } >
        <
        SparkleSvg width = {
            size
        }
        height = {
            size
        }
        viewBox = "0 0 184 184"
        fill = "none" >
        <
        path d = {
            path
        }
        fill = {
            color
        }
        /> <
        /SparkleSvg> <
        /SparkleWrapper>
    );
};

const comeInOut = keyframes `
  0% {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
`;

const spin = keyframes `
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(100deg);
  }
`;

const Wrapper = styled(UnstyledButton)
`
  display: inline-block;
  position: relative;
  color: inherit;
  text-shadow: 0px 0px 3px var(--color-background),
    1px 1px 1px var(--color-background);
`;

const SparkleWrapper = styled.span `
  position: absolute;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 900ms forwards;
  }
`;

const SparkleSvg = styled.svg `
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

const ChildWrapper = styled.strong `
  position: relative;
  z-index: 2;
  font-weight: bold;
`;

export default Sparkles;
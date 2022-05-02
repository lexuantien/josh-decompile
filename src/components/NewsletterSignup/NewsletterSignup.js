import React from 'react';
import styled, {
    keyframes
} from 'styled-components';

import useWindowDimensions from '@hooks/use-window-dimensions.hook';
import useSound from '@hooks/use-sound.hook';
import {
    CONVERTKIT_TAGS_BY_ID
} from '@constants';

import Heading from '@components/Heading';
import Paragraph from '@components/Paragraph';
import TextInput from '@components/TextInput';
import Spacer from '@components/Spacer';
import PoofyRainbowButton from '@components/RainbowButton/PoofyRainbowButton';
import BurstGeyser from '@components/ConfettiGeyser/BurstGeyser';
import Spinner from '@components/Spinner';
import Em from '@components/Em';
import Me from '@components/Me';
import Checkbox from '@components/Checkbox';
import Sparkles from '@components/Sparkles';
import WobblyFloat from '../WobblyFloat';

const useSuccessfulSignup = () => {
    const [playFanfare] = useSound('/sounds/fanfare.mp3', {
        volume: 0.3,
    });
    const [playPfff] = useSound('/sounds/pfff.mp3', {
        volume: 0.3
    });
    const [showConfetti, setShowConfetti] = React.useState(false);

    const timeoutId = React.useRef(null);

    const internalHandleSuccess = () => {
        playFanfare();

        timeoutId.current = window.setTimeout(() => {
            playPfff();
            setShowConfetti(true);
        }, 1750);
    };

    React.useEffect(() => {
        return () => {
            window.clearTimeout(timeoutId.current);
        };
    }, []);

    return [internalHandleSuccess, showConfetti];
};

const Success = ({
    variant
}) => {
    const SuccessWrapper =
        variant === 'minimal' ?
        MinimalSuccessWrapper :
        DefaultSuccessWrapper;

    return ( <
        SuccessWrapper >
        <
        Heading as = "h2"
        type = "medium-title" >
        Success!
        <
        /Heading> <
        Description >
        <
        Em > You 're in!</Em> Keep an eye out for a welcome email! No
        confirmation is necessary, but I 'll include some of my most
        popular free content.😄 <
        /Description> <
        /SuccessWrapper>
    );
};

const noop = () => {};

const HEADINGS = {
    default: 'A front-end web development newsletter that sparks joy',
};

const CTAS = {
    default: ( <
        >
        My goal with this blog is to create helpful content
        for front - end web devs, and my newsletter is no different!I 'll let
        you know when I publish new content, and I 'll even share{'
        '} <
        Em > exclusive newsletter - only content < /Em> now and then. <
        br / >
        <
        br / >
        No spam, unsubscribe at any time. <
        />
    ),
};

const NewsletterSignup = ({
    variant = 'default', // careers, minimal
    cta,
    handleSuccess = noop,
    noFloating,
    tags = [],
}) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [status, setStatus] = React.useState('idle');
    const [constantConfetti, setConstantConfetti] = React.useState(
        false
    );

    const [internalHandleSuccess, showConfetti] = useSuccessfulSignup();

    const windowDimensions = useWindowDimensions();

    const geyserPosition = React.useMemo(() => {
        return [
            windowDimensions.width,
            Math.min(700, windowDimensions.height),
        ];
    }, [windowDimensions.width, windowDimensions.height]);

    const completeTags = [
        CONVERTKIT_TAGS_BY_ID['primary-newsletter'],
        ...tags.map((tag) => CONVERTKIT_TAGS_BY_ID[tag]),
        variant === 'careers' ?
        CONVERTKIT_TAGS_BY_ID.careers :
        CONVERTKIT_TAGS_BY_ID.technical,
    ];

    const justTheForm = variant === 'minimal';

    return ( <
        > {
            showConfetti && ( <
                BurstGeyser position = {
                    geyserPosition
                }
                enableCollisions = {
                    false
                }
                airFriction = {
                    0.04
                }
                velocity = {
                    30
                }
                angularVelocity = {
                    0.6
                }
                angle = {-135
                }
                spread = {
                    5
                }
                volatility = {
                    0.6
                }
                concentration = {
                    16
                }
                duration = {
                    750
                }
                />
            )
        }

        <
        Wrapper > {!justTheForm && ( <
                MeWrapper >
                <
                WobblyFloat disabled = {
                    noFloating
                } >
                <
                Me / >
                <
                /WobblyFloat> <
                /MeWrapper>
            )
        } <
        Content > {
            status === 'completed' ? ( <
                Success variant = {
                    variant
                }
                />
            ) : ( <
                > {!justTheForm && ( <
                        Title forwardedAs = "h2"
                        id = "newsletter-signup-heading"
                        type = "medium-title" >
                        {
                            HEADINGS.default
                        } <
                        /Title>
                    )
                } {
                    !justTheForm && ( <
                        Description > {
                            cta || CTAS.default
                        } < /Description>
                    )
                } <
                SignupForm variant = {
                    variant
                }
                onSubmit = {
                    (ev) => {
                        ev.preventDefault();
                        setStatus('submitting');

                        fetch('/api/subscribe-user', {
                                method: 'POST',
                                body: JSON.stringify({
                                    email,
                                    first_name: name,
                                    tags: completeTags,
                                }),
                            })
                            .then((res) => res.json())
                            .then((json) => {
                                setStatus('completed');

                                internalHandleSuccess();
                                handleSuccess();
                            });
                    }
                } >
                <
                NameCol >
                <
                TextInput id = "first-name"
                label = "First Name"
                autoComplete = "given-name"
                value = {
                    name
                }
                onChange = {
                    (ev) => setName(ev.target.value)
                }
                disabled = {
                    status === 'submitting'
                }
                /> <
                /NameCol> <
                Spacer size = {
                    32
                }
                /> <
                EmailCol >
                <
                TextInput id = "tlemail"
                label = "Email"
                required = {
                    true
                }
                autoComplete = "email"
                type = "email"
                value = {
                    email
                }
                onChange = {
                    (ev) => setEmail(ev.target.value)
                }
                disabled = {
                    status === 'submitting'
                }
                /> <
                /EmailCol> <
                Spacer size = {
                    32
                }
                /> <
                PoofyRainbowButton id = "newsletter-signup-button"
                type = "submit"
                style = {
                    {
                        width: 175
                    }
                }
                disabled = {
                    status === 'submitting'
                } >
                {
                    status === 'submitting' ? ( <
                        Spinner color = "var(--color-background)" / >
                    ) : (
                        'Subscribe'
                    )
                } <
                /PoofyRainbowButton> <
                input type = "hidden"
                value = "1"
                name = "embed" / >
                <
                /SignupForm> <
                />
            )
        } <
        /Content> <
        /Wrapper> <
        />
    );
};

const fadeIn = keyframes `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div `
  position: relative;
  display: flex;
`;

const DefaultSuccessWrapper = styled.div `
  animation: ${fadeIn} 1250ms;
  min-height: 354px;

  @media (min-width: 1000px) {
    width: 686px;
  }
`;

const MinimalSuccessWrapper = styled(DefaultSuccessWrapper)
`
  padding: 32px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  background: var(--color-gray-100);
  min-height: revert;

  p {
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
    width: revert;
  }
`;

const SignupForm = styled.form `
  display: flex;
  align-items: flex-end;
  margin-top: ${(p) => (p.variant === 'minimal' ? 8 : 64)}px;
  margin-bottom: 8px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const NameCol = styled.div `
  flex: 2;

  @media (max-width: 650px) {
    width: 100%;
  }
`;
const EmailCol = styled.div `
  flex: 3;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Content = styled.div `
  position: relative;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Description = styled(Paragraph)
`
  margin-top: 16px;
  max-width: 560px;
`;

const MeWrapper = styled.div `
  position: absolute;
  top: 84px;
  right: 0;
  transform: translateX(100%);
  display: none;
  backface-visibility: hidden;

  @media (min-width: 1100px) {
    right: -32px;
  }

  @media (min-width: 1000px) {
    display: block;
  }
`;

const Title = styled(Heading)
`
  max-width: 550px;
  margin-bottom: 24px;
`;

export default NewsletterSignup;
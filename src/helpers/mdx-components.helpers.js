import {
    RefreshCw,
    Save
} from 'react-feather';

import Paragraph from '@components/Paragraph';
import SmallParagraph from '@components/Paragraph/SmallParagraph';
import PostLink from '@components/PostLink';
import Link from '@components/Link';
import Blockquote from '@components/Blockquote';
import List from '@components/List';
import ContentHeading from '@components/ContentHeading';
import Chunk from '@components/Chunk';
import UnstyledButton from '@components/UnstyledButton';
import Em from '@components/Em';
import Me from '@components/Me';
import Strikethrough from '@components/Strikethrough';
import Sparkles from '@components/Sparkles';
import InlineCode from '@components/InlineCode';
import CodeSnippet from '@components/CodeSnippet';
import StaticCodeSnippet from '@components/CodeSnippet/LazyStaticCodeSnippet';
import LiveCodeSnippet from '@components/CodeSnippet/LazyLiveCodeSnippet';
import Playground from '@components/Playground';
import ReactPlayground from '@components/Playground/React';
import PostImage from '@components/PostImage';
import Asterisk from '@components/Asterisk';
import Term from '@components/Term';
import Sidenote from '@components/Sidenote';
import DesktopOnly from '@components/DesktopOnly';
import MobileOnly from '@components/MobileOnly';
import VideoGif from '@components/VideoGif';
import VideoPlayer from '@components/VideoPlayer';
import VimeoVideoPlayer from '@components/VimeoVideoPlayer';
import FullBleed from '@components/FullBleed';
import FullBleedTutorial from '@components/FullBleedTutorial/FullBleedTutorialV2';
import InlineSFX from '@components/InlineSFX';
import SideBySide from '@components/SideBySide';
import SideBySideCode from '@components/SideBySideCode';
import DeconstructedPancake from '@components/DeconstructedPancake';
import BinaryPoll from '@components/BinaryPoll';
import BarGraph from '@components/BarGraph';
import Tweet from '@components/Tweet';
import FakeTweet from '@components/FakeTweet';
import TweetGrid from '@components/TweetGrid';
import Testimonial from '@components/Testimonial';
import TwitterCTA from '@components/TwitterCTA';
import Center from '@components/Center';
import Spacer from '@components/Spacer';
import HorizontalRule from '@components/HorizontalRule';
import VisuallyHidden from '@components/VisuallyHidden';
import RelatedPosts from '@components/RelatedPosts';
import EggheadSplash from '@components/EggheadSplash';
import CanIUseEmbed from '@components/CanIUseEmbed';
import YoutubeEmbed from '@components/YoutubeEmbed';
import CodeSandboxEmbed from '@components/CodeSandboxEmbed';
import NewsletterSignup from '@components/NewsletterSignup';
import {
    NewsletterLinkToPost
} from '@components/Newsletter/raw-components';
import VennDiagram from '@components/VennDiagram/VennDiagramInPost';
import RenderWhenOnscreen from '@components/RenderWhenOnscreen';
import SkewedLayers from '@components/SkewedLayers';
import ImageCompare from '@components/ImageCompare';
import RawOnly from '@components/RawOnly';
import EpilepsyWarning from '@components/EpilepsyWarning';
import {
    ConfigProvider,
    ConfigContext,
} from '@components/ConfigContext';
import {
    AnalyticsProvider
} from '@components/AnalyticsContext';
import ColorPicker from '@components/ColorPicker/LazyColorPicker';

// One-offs
import {
    ButtonGradient,
    ButtonLayers,
    ButtonLayersWithShadow,
    FinalButton,
    FinalButtonRound,
    IntroDemo,
    SoftShadow,
} from '@post-helpers/3d-button';
import {
    Environment,
    MotionWarning,
    OldBrowserWarning,
    Sandbox,
    SpringComparison,
    SpringMechanism,
    SpringVsEase,
} from '@post-helpers/spring-physics-intro';
import {
    BezierGraph,
    BoxAnimation,
    EarlyButton,
    EnteringAndExiting,
} from '@post-helpers/css-transitions';
import DynamicBezierCurvesMainContent from '@post-helpers/dynamic-bezier-curves';
import {
    LogoExplosion
} from '@post-helpers/how-i-built-my-blog';
import {
    HitCounterCodeSamples,
    HitCounterDemo,
    ScreenTriggerer,
} from '@post-helpers/serverless-hit-counter';
import {
    BlenderGallery
} from '@post-helpers/how-to-learn-stuff-quickly';
import {
    ButtonDemo,
    SetterDemo,
} from '@post-helpers/css-variables-for-react-devs';
import {
    ShadowDemo,
    ShadowComparisonDemo,
} from '@post-helpers/designing-shadows';
import {
    Box,
    FullBleedGrid,
    FullBleedGridWithContent,
    HolyGrail,
} from '@post-helpers/full-bleed';
import {
    DesignerPerspectiveIllustration,
    LeftAlignDemo,
} from '@post-helpers/pixel-perfection';
import MarginCollapse from '@post-helpers/rules-of-margin-collapse';
import {
    EnvelopeDemo,
    EnvelopeLayers,
} from '@post-helpers/stacking-contexts';
import FloatedGluestick from '@post-helpers/styled-components/FloatedGluestick';
import {
    NestedDemo
} from '@post-helpers/css-counters';
import TransformDemo from '@post-helpers/transforms/TransformDemo';
import {
    CompressionTable
} from '@post-helpers/embracing-modern-image-formats';
import {
    Demos,
    Initial,
    InitialKeyframe,
    InitialSplit,
    IntervalDemos,
} from '@post-helpers/animated-sparkles';
import {
    SiteDemo,
    GlugDemo,
    PopsDemo,
    PlayPauseDemo,
    DrumMachineDemo,
    CheckboxDemo,
} from '@post-helpers/use-sound';
import {
    DoubleIconDemo,
    ShowMoreDemo,
    FancyDemos,
    CircleDemo,
} from '@post-helpers/boop';
import {
    OrderOfOperations
} from '@post-helpers/dark-mode';
import {
    NailPolish
} from '@post-helpers/demystifying-styled-components';
import {
    FoldCodeSnippet,
    FoldingDemo,
    FoldOriginDemo,
    FoldPerspectiveDemo,
    FoldTransformDemo,
    TheTrickDemo,
} from '@post-helpers/folding-the-dom';
import {
    HomeButtonSnippet
} from '@post-helpers/modern-spacer-gif';
import {
    PersistedLiveDemo
} from '@post-helpers/persisting-react-state';
import {
    CasinoLights,
    RainbowDemoButton,
    GradientIdeaImage,
    RainbowButtonOldMethod,
} from '@post-helpers/rainbow-button';
import {
    PerilsCulprit
} from '@post-helpers/the-perils-of-rehydration';
import {
    BoxModelQuiz
} from '@post-helpers/custom-css-reset';
import {
    FadeInDemo,
    ScaleWithPseudoAfter,
    ScaleWithPseudoBefore,
} from '@components/SnippetBlocks';
import {
    GradientSlider,
    ManuallyCalculateMidpoints,
    RGBColors,
    HSLColors,
} from '@post-helpers/make-beautiful-gradients';
import {
    BlocksInline
} from '@post-helpers/understanding-layout-algorithms';
import {
    IntroFileViewerDemo,
    MetaFileViewerDemo,
    HooksFileViewerDemo,
} from '@post-helpers/file-structure';
import TerminalScreenshot from '@post-helpers/terminal-for-js-devs/TerminalScreenshot';

//
//
//
//
//
export const COMPONENTS = {
    p: Paragraph,
    a: ({
            type,
            ...props
        }) =>
        type === 'original' ? < a { ...props
        }
    /> : <PostLink {...props} / > ,
    blockquote: Blockquote,
    ul: (props) => < List type = "unordered" { ...props
    }
    />,
    ol: (props) => < List type = "ordered" { ...props
    }
    />,
    li: List.ListItem,
    i: (props) => < em { ...props
    }
    />,
    em: ({
            type,
            ...props
        }) =>
        type === 'original' ? < em { ...props
        }
    /> : <Em {...props} / > ,
    strike: Strikethrough,
    img: PostImage,
    inlineCode: InlineCode,
    code: CodeSnippet,
    h1: (props) => < ContentHeading type = "major-heading" { ...props
    }
    />,
    h2: (props) => < ContentHeading type = "normal-heading" { ...props
    }
    />,
    h3: (props) => < ContentHeading type = "minor-heading" { ...props
    }
    />,
    hr: HorizontalRule,
    center: Center,
    SmallParagraph,
    RelatedPosts,
    Asterisk,
    Term,
    Sidenote,
    Spacer,
    HorizontalRule,
    Me,
    VideoGif,
    VideoPlayer,
    VimeoVideoPlayer,
    FullBleed,
    FullBleedTutorial,
    VisuallyHidden,
    Paragraph,
    Link,
    PostLink,
    Blockquote,
    Chunk,
    UnstyledButton,
    List,
    ListItem: List.ListItem,
    Em,
    Sparkles,
    PostImage,
    InlineCode,
    CodeSnippet,
    LiveCodeSnippet,
    StaticCodeSnippet,
    Playground,
    ReactPlayground,
    ContentHeading,
    InlineSFX,
    SideBySide,
    SideBySideCode,
    DeconstructedPancake,
    BinaryPoll,
    BarGraph,
    Tweet,
    FakeTweet,
    TweetGrid,
    Testimonial,
    EggheadSplash,
    CanIUseEmbed,
    YoutubeEmbed,
    CodeSandboxEmbed,
    NewsletterSignup,
    NewsletterLinkToPost,
    VennDiagram,
    TwitterCTA,
    DesktopOnly,
    MobileOnly,
    SkewedLayers,
    ImageCompare,
    RawOnly,
    EpilepsyWarning,
    RenderWhenOnscreen,
    ColorPicker,

    // Icons
    RefreshCw,
    Save,

    // In the "Raw" email views, <SubscriberGreeting> emits a big ol'
    // merge tag. In the non-raw version (the rest of the site),
    // it should just render the fallback.
    SubscriberGreeting: ({
        fallback
    }) => ( <
        Paragraph > {
            fallback
        } < /Paragraph>
    ),

    // One-offs
    ButtonGradient,
    ButtonLayers,
    ButtonLayersWithShadow,
    FinalButton,
    FinalButtonRound,
    IntroDemo,
    SoftShadow,
    Environment,
    MotionWarning,
    OldBrowserWarning,
    Sandbox,
    SpringComparison,
    SpringMechanism,
    SpringVsEase,
    BezierGraph,
    BoxAnimation,
    EarlyButton,
    EnteringAndExiting,
    DynamicBezierCurvesMainContent,
    LogoExplosion,
    HitCounterCodeSamples,
    HitCounterDemo,
    ScreenTriggerer,
    BlenderGallery,
    ButtonDemo,
    SetterDemo,
    ShadowDemo,
    ShadowComparisonDemo,
    Box,
    FullBleedGrid,
    FullBleedGridWithContent,
    HolyGrail,
    DesignerPerspectiveIllustration,
    LeftAlignDemo,
    MarginCollapse,
    EnvelopeDemo,
    EnvelopeLayers,
    FloatedGluestick,
    NestedDemo,
    TransformDemo,
    CompressionTable,
    Demos,
    Initial,
    InitialKeyframe,
    InitialSplit,
    IntervalDemos,
    SiteDemo,
    GlugDemo,
    PopsDemo,
    PlayPauseDemo,
    DrumMachineDemo,
    CheckboxDemo,
    DoubleIconDemo,
    ShowMoreDemo,
    FancyDemos,
    CircleDemo,
    OrderOfOperations,
    NailPolish,
    FoldCodeSnippet,
    FoldingDemo,
    FoldOriginDemo,
    FoldPerspectiveDemo,
    FoldTransformDemo,
    TheTrickDemo,
    HomeButtonSnippet,
    PersistedLiveDemo,
    CasinoLights,
    RainbowDemoButton,
    GradientIdeaImage,
    RainbowButtonOldMethod,
    PerilsCulprit,
    BoxModelQuiz,
    FadeInDemo,
    ScaleWithPseudoAfter,
    ScaleWithPseudoBefore,
    GradientSlider,
    ManuallyCalculateMidpoints,
    RGBColors,
    HSLColors,
    BlocksInline,
    IntroFileViewerDemo,
    MetaFileViewerDemo,
    HooksFileViewerDemo,
    TerminalScreenshot,
};
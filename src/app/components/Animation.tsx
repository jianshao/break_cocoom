'use client'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type EventHandler = () => void;

interface EventInfos {
  name: string,
  handler: EventHandler
}

interface LottieProps {
  animationData: any,
  loop: boolean,
  autoplay: boolean,
  events: EventInfos[]
}


const Animation: React.FC<LottieProps> = ({ animationData, loop, autoplay, events }) => {
  const defaultOptions = {
    loop: true, // 如果你想让动画循环播放
    autoplay: true, // 如果你想让动画自动播放
  }
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      onEvent={event => {
        events.forEach(item => {
          if (item.name === event) {
            item.handler()
          }
        });
      }}
    ></Player>

  );
};

export default Animation;
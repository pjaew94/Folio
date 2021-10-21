import { navigation } from "../exports/variables";
import CustomRouteLink from "./CustomRouteLink";

const Navigation: React.FC<{ toWork?: boolean }> = ({ toWork }) => {
  return (
    <div
      className="flex flex-col item-start w-min h-min"
    >
      {navigation.map((item, index) => {
        return (
          <CustomRouteLink
            key={index}
            route={item.route}
            text={item.text}
            index={index}
            toWork={toWork}
          />
        );
      })}
    </div>
  );
};

export default Navigation;

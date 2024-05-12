import getServerContext from "@nimpl/context/get-server-context";
import { InsideContext } from "../../components/InsideContext";

const SecondComponent = async () => {
    const context = getServerContext(InsideContext);

    return <p id="context-second-value">{context?.inside}</p>;
};

export default SecondComponent;

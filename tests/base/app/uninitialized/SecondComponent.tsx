import getServerContext from "@nimpl/context/get-server-context";
import { UninitializedContext } from "../../components/UninitializedContext";

const SecondComponent = async () => {
    const context = getServerContext(UninitializedContext);

    return <p id="context-second-value">{context?.uninitialized}</p>;
};

export default SecondComponent;

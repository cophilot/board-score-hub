import getDefinition from './definition';
import CalicoView from './View';

const Calico = {
    view: CalicoView,
    definition: getDefinition(),
};
export default Calico;

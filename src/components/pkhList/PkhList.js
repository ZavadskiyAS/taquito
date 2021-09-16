import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
// import pkhsActions from '../../redux/pkhs/pkhsActions';
import styles from './PkhList.module.css';
import PkhItem from '../pkhItem/PkhItem';
import PropTypes from 'prop-types';

// const selectedCategory = useSelector((state) => console.log(state));
// const itemMove = {
//   enter: styles.enter,
//   enterActive: styles.enterActive,
//   exit: styles.exit,
//   exitActive: styles.exitActive,
// };

const PkhList = ({ pkhs, onRemovePkh }) => {


  return (
    // <TransitionGroup component="ul">
    <ul>
      {pkhs &&
        pkhs.map(pkh => (
          // <CSSTransition key={pkh.id} timeout={250} classNames={itemMove}>
            <PkhItem
              pkh={pkh}
              onRemovePkh={() => onRemovePkh(pkh.id)}
            />
          // </CSSTransition>
        ))}
    </ul>
    // </TransitionGroup>
  );
};

PkhList.propTypes = {
  pkhs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // number: PropTypes.string.isRequired,
    }),
  ),
  onRemovePkh: PropTypes.func.isRequired,
};

// const mapStateToProps = ({ pkhs }) => ({
//   pkhs: pkhs.items.filter(pkh =>
//     pkh.name.toLowerCase().includes(pkhs.filter.toLowerCase()),
//   ),
// });

// const mapDispatchToProps = {
//   onRemovePkh: pkhsActions.removePkh,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PkhList);
export default PkhList;

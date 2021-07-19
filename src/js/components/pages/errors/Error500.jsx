import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { errorShape } from 'store/models/page';
import { ENV_LOCAL, ENV_PROD } from '@constants';

const Error500 = ({ ENVIRONMENT = ENV_LOCAL, errors }) => {
  return (
    <div className="error error_500">
      <h1>Unexpected error</h1>
      {ENVIRONMENT === ENV_LOCAL &&
        errors.map((error, i) => (
          <table className="table table-striped" key={i}>
            <tbody>
              {Object.keys(error).map((key, j) => {
                const val = error[key];
                if (val === undefined) return null;
                return (
                  <tr className="error__prop" key={j}>
                    <td>
                      {key}
                    </td>
                    <td>
                      <pre>{val.trim()}</pre>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ env, page }) => ({
  errors: page.errors,
  ENVIRONMENT: env.ENVIRONMENT,
});

Error500.propTypes = {
  ENVIRONMENT: PropTypes.oneOf([ENV_LOCAL, ENV_PROD]),
  errors: PropTypes.arrayOf(errorShape),
};

export default connect(mapStateToProps)(Error500);

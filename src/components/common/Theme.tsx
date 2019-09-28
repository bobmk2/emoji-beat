const BootstrapStyle = require('../../../static/vendor/styles/bootstrap.min.css');
const FontAwesomeStyle = require('../../../static/vendor/styles/fontawesome.min.css');

type OwnProps = {
  children: React.ReactNode;
};

type PropTypes = OwnProps;

const Theme = (props: PropTypes) => (
  // @ts-ignore
  <div
    style={{
      backgroundColor: '#AAAAAA',
      display: 'flexbox',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      overflowY: 'auto'
    }}
  >
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }
    `}</style>
    <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
    <style dangerouslySetInnerHTML={{ __html: FontAwesomeStyle }} />
    <link rel='stylesheet' type='text/css' href='/static/vendor/styles/regular.min.css' />
    <link rel='stylesheet' type='text/css' href='/static/vendor/styles/solid.min.css' />

    <div
      style={{
        backgroundColor: '#FFF',
        marginLeft: 0,
        minHeight: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {props.children}
    </div>
  </div>
);

export { Theme };

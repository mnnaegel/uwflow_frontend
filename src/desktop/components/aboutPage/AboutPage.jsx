import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

/* Child Components */
import Navbar from '../common/Navbar';

const mapStateToProps = state => ({});

const AboutPage = () => {
  return <Navbar />;
};

export default connect(mapStateToProps)(AboutPage);

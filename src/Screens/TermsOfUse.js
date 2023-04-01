import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TermsOfUse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>OVERVIEW</Text>
      <Text>
        This website is operated by Film Inquiry. Throughout the site, the terms
        “we”, “us” and “our” refer to Film Inquiry. Film Inquiry offers this
        website, including all information, tools and services available from
        this site to you, the user, conditioned upon your acceptance of all
        terms, conditions, policies and notices stated here.
      </Text>
      <Text style={styles.text2}>
        Please read these Terms of Service carefully before accessing or using
        our website. By accessing or using any part of the site, you agree to be
        bound by these Terms of Service. If you do not agree to all the terms
        and conditions of this agreement, then you may not access the website or
        use any services. If these Terms of Service are considered an offer,
        acceptance is expressly limited to these Terms of Service.
      </Text>
      <Text style={styles.text3}>
        Any new features or tools which are added to the current store shall
        also be subject to the Terms of Service. You can review the most current
        version of the Terms of Service at any time on this page. We reserve the
        right to update, change or replace any part of these Terms of Service by
        posting updates and/or changes to our website. It is your responsibility
        to check this page periodically for changes. Your continued use of or
        access to the website following the posting of any changes constitutes
        acceptance of those changes.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 10,
  },
  text1: {
    paddingVertical: 5,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
  },
  text2: {
    paddingVertical: 15,
  },
  text3: {
    paddingVertical: 15,
  },
});
export default TermsOfUse;

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import './App.css';

export default function App() {
    return (

        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.header}>EC</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button_2}>
                        <Text style={styles.buttonText_2}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_2}>
                        <Text style={styles.buttonText_2}>Projects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Resume</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.paragraph}>
                <Text style={styles.title}>Erik Chao</Text>
                <Text style={styles.subtitle}>Aspiring Software Developer</Text>

            </View>

            <View style={styles.about}>
                <Text style={styles.aboutTitle}>About Me:</Text>
                <Text style={styles.aboutContent}>
                    Hello, my name is Erik, and I am currently attending University of California -
                    Santa Cruz as a Computer Science major. I like creating functionable
                    applications that are easy to use for all. {"\n"}{"\n"}
                    I enjoy coding where I'm able to help others make life easy and efficient.</Text>

            </View>

            <View style={styles.projects}>
                <Text style={styles.projectsTitle}>Projects:</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',

        backgroundColor: '#153961',
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        paddingTop: 50,
    },

    button: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#4e73a3',
    },

    button_2: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    buttonText: {
        color: '#e4ecf5',
        fontWeight: 'bold',
    },

    buttonText_2: {
        color: '#e4ecf5',
        fontWeight: 'bold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    header: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: '#e4ecf5',
    },
    paragraph: {
        marginTop: 30,
        paddingLeft: 30,
        paddingBottom: 30,
        marginLeft: 20,
        marginRight: 20,
    },

    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#e4ecf5',
    },

    subtitle: {
        fontSize: 30,
        color: '#e4ecf5',
    },

    about: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    aboutTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#e4ecf5',
        textAlign: 'center',

    },

    aboutContent: {
        fontSize: 20,
        color: '#e4ecf5',
        textAlign: 'center',


    },

    projects: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,

    },

    projectsTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#e4ecf5',

    },



});
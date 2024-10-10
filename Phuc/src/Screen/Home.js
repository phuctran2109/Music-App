import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

// Dữ liệu mẫu cho playlist và bài hát
const playlists = [
    { id: '1', title: 'Nhạc', image: 'https://yt3.ggpht.com/-qfdylQER4GU/AAAAAAAAAAI/AAAAAAAAAAA/QQTnVEWuEU4/s900-c-k-no/photo.jpg' },
    { id: '2', title: 'Yêu thích', image: 'https://yt3.ggpht.com/-qfdylQER4GU/AAAAAAAAAAI/AAAAAAAAAAA/QQTnVEWuEU4/s900-c-k-no/photo.jpg' },
    { id: '3', title: 'Nghe nhiều nhất', image: 'https://yt3.ggpht.com/-qfdylQER4GU/AAAAAAAAAAI/AAAAAAAAAAA/QQTnVEWuEU4/s900-c-k-no/photo.jpg' },
    { id: '4', title: 'Top Hits', image: 'https://yt3.ggpht.com/-qfdylQER4GU/AAAAAAAAAAI/AAAAAAAAAAA/QQTnVEWuEU4/s900-c-k-no/photo.jpg' },
];

const songs = [
    { id: '1', title: 'Chúng ta của hiện tại', artist: 'Sơn Tùng MT-P 1' },
    { id: '2', title: 'Tell the kids i love them', artist: 'Obito, Shiki' },
    { id: '3', title: 'Chúng ta của hiện tại', artist: 'Sơn Tùng MT-P 3' },
];

// Dữ liệu cho phần "Gần đây"
const recentContent = [
    { id: '1', title: 'Tell the kids i love them', artist: 'Obito, Shiki', image: 'https://tse3.mm.bing.net/th?id=OIP.QGWIvCFb4cm_IQq1nxJq_QHaIW&pid=Api&P=0&h=180' },
    { id: '2', title: 'Tuyển tập của Sơn Tùng M-TP', artist: '', image: 'https://tse3.mm.bing.net/th?id=OIP.QGWIvCFb4cm_IQq1nxJq_QHaIW&pid=Api&P=0&h=180' },
    { id: '3', title: 'Tell the kids i love them', artist: 'Obito, Shiki', image: 'https://tse3.mm.bing.net/th?id=OIP.QGWIvCFb4cm_IQq1nxJq_QHaIW&pid=Api&P=0&h=180' },
    { id: '4', title: 'Tuyển tập của Sơn Tùng M-TP', artist: '', image: 'https://tse3.mm.bing.net/th?id=OIP.QGWIvCFb4cm_IQq1nxJq_QHaIW&pid=Api&P=0&h=180' },
    { id: '5', title: 'Tell the kids i love them', artist: 'Obito, Shiki', image: 'https://tse3.mm.bing.net/th?id=OIP.QGWIvCFb4cm_IQq1nxJq_QHaIW&pid=Api&P=0&h=180' },
    { id: '6', title: 'Tuyển tập của Sơn Tùng M-TP', artist: '', image: 'https://tse3.mm.bing.net/th?id=OIP.QGWIvCFb4cm_IQq1nxJq_QHaIW&pid=Api&P=0&h=180' },
];

// Dữ liệu cho phần "Dành cho Vinh Trường Vinh"
const vinhPlaylists = [
    { id: '1', title: 'Daily Mix 1', image: 'https://tse1.mm.bing.net/th?id=OIP.YTbpKB3rZu-xBixQcOp7pgHaEK&pid=Api&P=0&h=180' },
    { id: '2', title: 'Daily Mix 2', image: 'https://tse1.mm.bing.net/th?id=OIP.YTbpKB3rZu-xBixQcOp7pgHaEK&pid=Api&P=0&h=180' },
    { id: '3', title: 'Daily Mix 3', image: 'https://tse1.mm.bing.net/th?id=OIP.YTbpKB3rZu-xBixQcOp7pgHaEK&pid=Api&P=0&h=180' },
    { id: '4', title: 'Daily Mix 4', image: 'https://tse1.mm.bing.net/th?id=OIP.YTbpKB3rZu-xBixQcOp7pgHaEK&pid=Api&P=0&h=180' },
    { id: '5', title: 'Daily Mix 5', image: 'https://tse1.mm.bing.net/th?id=OIP.YTbpKB3rZu-xBixQcOp7pgHaEK&pid=Api&P=0&h=180' },
    { id: '6', title: 'Daily Mix 6', image: 'https://tse1.mm.bing.net/th?id=OIP.YTbpKB3rZu-xBixQcOp7pgHaEK&pid=Api&P=0&h=180' },
];

// Dữ liệu cho phần "Nghệ sĩ yêu thích của bạn"
const favoriteArtists = [
    { id: '1', name: 'Sơn Tùng MT-P', image: 'https://yt3.ggpht.com/-qfdylQER4GU/AAAAAAAAAAI/AAAAAAAAAAA/QQTnVEWuEU4/s900-c-k-no/photo.jpg' },
    { id: '2', name: 'Obito', image: 'https://tse1.mm.bing.net/th?id=OIP.ouQGqfrejbDAjOUF7LbnRAHaD4&pid=Api&P=0&h=180' },
    { id: '3', name: 'HieuThuHai', image: 'https://tse3.mm.bing.net/th?id=OIP.ayhnnMj1q96H51mh7yUCBQHaHa&pid=Api&P=0&h=180' },
];

const Home = () => {
    const renderPlaylist = ({ item }) => (
        <TouchableOpacity style={styles.playlistContainer}>
            <Image source={{ uri: item.image }} style={styles.playlistImage} />
            <Text style={styles.playlistTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderSong = ({ item }) => (
        <View style={styles.songContainer}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songArtist}>{item.artist}</Text>
        </View>
    );

    const renderRecent = ({ item }) => (
        <TouchableOpacity style={styles.recentContainer}>
            <Image source={{ uri: item.image }} style={styles.recentImage} />
            <Text style={styles.recentTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderArtist = ({ item }) => (
        <TouchableOpacity style={styles.artistContainer}>
            <Image source={{ uri: item.image }} style={styles.artistImage} />
            <Text style={styles.artistName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
           <View style={styles.avatar}>
               <Image style={{width:50,height:50,marginLeft:15}} source={{uri:'https://tuyensinh.ictu.edu.vn/wp-content/uploads/2021/06/anh-6-1-200x300.jpg'}} />
               <Text style={styles.header}>MELODY VIBE</Text>
           </View>

            {/* Phần Playlist */}
            <Text style={styles.sectionTitle}>Top Music</Text>
            <View style={{ height: 160 }}>
                <FlatList
                    data={playlists}
                    renderItem={renderPlaylist}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                />
            </View>

            {/* Phần danh sách bài hát */}
            <Text style={styles.sectionTitle}>Nội dung bạn hay nghe gần đây</Text>
            <View>
                <FlatList
                    data={songs}
                    renderItem={renderSong}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />
            </View>
            {/* Phần "Gần đây của tôi" */}
            <Text style={styles.sectionTitle}>Gần đây</Text>
            <View style={{ height: 160 }}>
                <FlatList
                    data={recentContent}
                    renderItem={renderRecent}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                />
            </View>
            {/* Phần "Nghệ sĩ yêu thích của bạn" */}
            <Text style={styles.sectionTitle}>Nghệ sĩ yêu thích của bạn</Text>
            <View style={{ height: 160 }}>
                <FlatList
                    data={favoriteArtists}
                    renderItem={renderArtist}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    avatar:{
        flexDirection:'row',

    },
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
    },
    header: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    playlistContainer: {
        marginRight: 15,
        alignItems: 'center',
    },
    playlistImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    playlistTitle: {
        marginTop: 8,
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    songContainer: {
        marginBottom: 10,
    },
    songTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    songArtist: {
        color: '#aaa',
        fontSize: 14,
    },
    recentContainer: {
        marginRight: 10, // Giảm khoảng cách giữa các item
        alignItems: 'center',
        width: 100, // Cố định chiều rộng để chữ có thể xuống dòng
    },
    recentImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    recentTitle: {
        marginTop: 8,
        fontSize: 14,
        color: '#fff',
        textAlign: 'center', // Căn giữa chữ
        numberOfLines: 2, // Giới hạn số dòng hiển thị
    },
    artistContainer: {
        marginRight: 15,
        alignItems: 'center',
    },
    artistImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    artistName: {
        marginTop: 8,
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
});

export default Home;
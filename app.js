// アプリケーションの主要な機能を実装するJavaScript

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
=======
document.addEventListener('DOMContentLoaded', function () {
>>>>>>> 1b5b8cc (first commit)
    // 要素の取得
    const loadingScreen = document.getElementById('loading-screen');
    const instructions = document.getElementById('instructions');
    const closeInstructionsBtn = document.getElementById('close-instructions');
    const toggleModelBtn = document.getElementById('toggle-model');
<<<<<<< HEAD
    
=======

>>>>>>> 1b5b8cc (first commit)
    // ARシーンが読み込まれたらローディング画面を非表示
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', function () {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });

    // カメラアクセスエラー時の処理
<<<<<<< HEAD
    scene.addEventListener('camera-error', function() {
=======
    scene.addEventListener('camera-error', function () {
>>>>>>> 1b5b8cc (first commit)
        alert('カメラへのアクセスができませんでした。ブラウザの設定を確認してください。');
    });

    // マーカーが検出されたときの処理
    const marker = document.querySelector('a-marker');
<<<<<<< HEAD
    marker.addEventListener('markerFound', function() {
=======
    marker.addEventListener('markerFound', function () {
>>>>>>> 1b5b8cc (first commit)
        console.log('マーカーを検出しました');
        // マーカー検出時に追加のアニメーションなどを実装可能
    });

    // マーカーを見失ったときの処理
<<<<<<< HEAD
    marker.addEventListener('markerLost', function() {
=======
    marker.addEventListener('markerLost', function () {
>>>>>>> 1b5b8cc (first commit)
        console.log('マーカーを見失いました');
    });

    // 説明を閉じるボタンの処理
<<<<<<< HEAD
    closeInstructionsBtn.addEventListener('click', function() {
        instructions.classList.add('hidden');
    });


    // オフライン検出
    window.addEventListener('online', function() {
        console.log('オンラインに戻りました');
    });
    
    window.addEventListener('offline', function() {
=======
    closeInstructionsBtn.addEventListener('click', function () {
        instructions.classList.add('hidden');
    });

    // オフライン検出
    window.addEventListener('online', function () {
        console.log('オンラインに戻りました');
    });

    window.addEventListener('offline', function () {
>>>>>>> 1b5b8cc (first commit)
        console.log('オフラインになりました');
        // オフラインモードの通知を表示するなどの処理を追加可能
    });
});
// クライアントロゴの横スクロールアニメーション
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.client-logos-wrapper');

    if (wrapper) {
        // スクロール速度の設定（秒単位）
        const scrollDuration = 40; // 40秒で1周（後で調整可能）

        // アニメーション速度をCSSに反映
        wrapper.style.animationDuration = `${scrollDuration}s`;
    }
});


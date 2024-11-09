// components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // エラーが発生した場合に状態を更新
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // エラーログを外部サービスに送信するなどの処理が可能
        console.error("ErrorBoundary caught an error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            // フォールバックUI
            return <h2>エラーが発生しました。しばらくしてから再度お試しください。</h2>;
        }
        // エラーがない場合は、通常の子コンポーネントをレンダリング
        return this.props.children;
    }
}

export default ErrorBoundary;
import React from 'react';
import { Link } from 'lucide-react';

interface Props {
  platform: string;
  isLinked: boolean;
  onLink: () => void;
}

export const SocialAccountLink: React.FC<Props> = ({ platform, isLinked, onLink }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-primary-dark">Link Account</h2>
    <button
      onClick={onLink}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
        isLinked
          ? 'border-green-500 bg-green-50 text-green-700'
          : 'border-gray-200 hover:border-primary'
      }`}
    >
      <Link className="w-5 h-5" />
      {isLinked ? `${platform} Account Linked` : `Link ${platform} Account`}
    </button>
  </div>
);
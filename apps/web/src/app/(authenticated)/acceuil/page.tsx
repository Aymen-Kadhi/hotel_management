'use client'

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { Api } from '@web/domain';

export default function AcceuilPage() {
  const [visitorToken, setVisitorToken] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const register = async () => {
      try {
        const response = await Api.Authentication.registerVisitor();
        setVisitorToken(response.token);
      } catch (error) {
        console.error('Failed to register visitor:', error);
      }
    };

    register();
  }, []);

  const navigateToHomePage = () => {
    router.push('/home');
  };

  return (
    <div>
      <div>Visitor Token: {visitorToken}</div>
      <Button type="primary" onClick={navigateToHomePage}>
        Go to HomePage
      </Button>
    </div>
  );
}
